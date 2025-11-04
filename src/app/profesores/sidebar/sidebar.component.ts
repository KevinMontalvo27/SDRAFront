import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-teacher-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class TeacherSidebarComponent {
  constructor(private courseService: CursoService) {}
}
