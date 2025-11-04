import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursoService } from '../../services/curso.service';
import { Course } from '../../estudiantes/recomendacion/tipos.model';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css'],
})
export class TeacherDashboardComponent {
  unitName = '';
  unitDescription = '';
  selectedUnitId: string | null = null;
  topicName = '';
  topicDescription = '';
  oaName = '';
  oaDescription = '';
  oaUrl = '';
  oaType: 'video' | 'image' | 'document' | 'external' = 'external';
  course: Course | null = null;

  constructor(private courseSrv: CursoService) {}

  addUnit() {}

  addTopic() {}

  addOA() {}
}
