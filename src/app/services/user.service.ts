import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AppUser {
  nombre?: string;
  grupo?: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<AppUser | null>(null);
  user$: Observable<AppUser | null> = this.userSubject.asObservable();

  constructor() {
    this.loadFromLocalStorage();

    // Escuchar cambios en localStorage desde otras pestañas
    window.addEventListener('storage', (event) => {
      if (event.key === 'info_alumno' || event.key === 'info_profesor' || event.key === null) {
        this.loadFromLocalStorage();
      }
    });
  }

  private loadFromLocalStorage() {
    const info_alumno = localStorage.getItem('info_alumno');
    const info_profesor = localStorage.getItem('info_profesor');

    if (info_alumno) {
      try {
        const parsed = JSON.parse(info_alumno);
        this.userSubject.next({ nombre: parsed.nombre, grupo: parsed.grupo });
        return;
      } catch { /* ignore parse errors */ }
    }

    if (info_profesor) {
      try {
        const parsed = JSON.parse(info_profesor);
        this.userSubject.next({ nombre: parsed.nombre_profesor, grupo: 'Profesor' });
        return;
      } catch { /* ignore parse errors */ }
    }

    this.userSubject.next(null);
  }

  // Llamar después de login o cuando se actualiza localStorage desde app
  refreshFromLocalStorage() {
    this.loadFromLocalStorage();
  }

  clear() {
    this.userSubject.next(null);
  }

  // Opcional: establecer manualmente (útil tras login)
  setUser(user: AppUser | null) {
    this.userSubject.next(user);
  }
}