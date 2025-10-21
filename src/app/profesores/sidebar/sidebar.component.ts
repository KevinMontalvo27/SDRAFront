import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Unit } from '../../estudiantes/recomendacion/tipos.model';

@Component({
  selector: 'app-teacher-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <nav class="sidebar-nav">
    <h3>Unidades</h3>
    <button (click)="addUnit()">+ Unidad</button>
    <ul>
      <li *ngFor="let u of units">
        <strong>{{ u.title }}</strong>
        <button (click)="addTopic(u.id)">+ Tema</button>
        <ul>
          <li *ngFor="let t of u.topics">
            <a [routerLink]="['topic', t.id]">{{ t.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  `,
  styles: [
    `.sidebar-nav{padding:16px;font-family:Arial}`,
    `ul{list-style:none;padding:0}`,
    `li{margin-bottom:8px}`,
    `a{text-decoration:none;color:#333}`,
    `a:hover{color:#1a73e8}`
  ]
})
export class TeacherSidebarComponent {
  @Input() units: Unit[] = [];
  @Output() unitAdded = new EventEmitter<void>();
  @Output() topicAdded = new EventEmitter<void>();

  addUnit() {
    // Aquí luego se abrirá un formulario modal o navegará a un formulario
    this.unitAdded.emit();
  }
  addTopic(unitId: string) {
    // Aquí luego se abrirá un formulario modal
    this.topicAdded.emit();
  }
}
