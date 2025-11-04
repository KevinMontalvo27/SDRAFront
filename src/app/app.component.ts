import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from './estudiantes/sidebar/sidebar.component';
import { RecommendationService } from './services/recomendacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'P_TomaDeciciones';
  loggedUser!: string;
  nombre_usuario$!: string;
  grupo$!: string;

  constructor(private route: Router, private recSrv: RecommendationService) {}

  ngOnInit() {
    const info_alumno = localStorage.getItem('info_alumno');
    if (info_alumno) {
      const { nombre} = JSON.parse(info_alumno);
      this.nombre_usuario$ = nombre;
      this.grupo$ = JSON.parse(info_alumno).grupo;
    }
  }

  navigateInicio() {
    this.route.navigate(['/Inicio']);
  }

  loggedin() {
    return localStorage.getItem('info_alumno');
  }

  logout() {
    localStorage.removeItem('info_alumno');
    this.route.navigate(['/']);
  }
}
