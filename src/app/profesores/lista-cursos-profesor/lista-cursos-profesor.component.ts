import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { Observable } from 'rxjs';
import { Course } from 'src/app/estudiantes/recomendacion/tipos.model';

@Component({
  selector: 'app-teacher-course-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-cursos-profesor.component.html',
})
export class TeacherCourseListComponent {
  grupo = 0;
  courses$: Observable<Course[]>;
  
  constructor(private courseSrv: CursoService) {
    const info = localStorage.getItem('info_profesor');
    if (info) {
      this.grupo = JSON.parse(info).grupo;
    }
    this.courses$ = this.courseSrv.getCourses(this.grupo);
  }
}
