import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="course-list">
      <h2>Mis cursos</h2>
      <div class="grid">
        <div *ngFor="let c of courses" class="card">
          <div class="card-bg"></div>
          <div class="card-body">
            <a
              [routerLink]="['/course', c.id, 'unit', 'unit1']"
              class="title"
              >{{ c.name }}</a
            >
            <p>{{ c.semester }}</p>
            <p *ngIf="c.progress !== undefined">{{ c.progress }}% completado</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .course-list {
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 16px;
        margin-top: 16px;
      }
      .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
        background: #fff;
      }
      .card-bg {
        height: 100px;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }
      .card-body {
        padding: 12px;
      }
      .title {
        font-weight: 600;
        display: block;
        margin-bottom: 4px;
        color: #1a73e8;
        text-decoration: none;
      }
      p {
        margin: 4px 0;
        color: #555;
      }
    `,
  ],
})
export class CourseListComponent {
  courses = this.courseSrv.getCourses();
  constructor(private courseSrv: CursoService) {}
}
