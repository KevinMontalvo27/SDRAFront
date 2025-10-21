import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-course-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  template: `
    <div class="layout">
      <aside class="sidebar">
        <app-sidebar [units]="course?.units"></app-sidebar>
      </aside>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      .layout {
        height: 100vh;
        width: 100%;
        display: flex;
      }
    `,
    `
      .sidebar {
        width: 15%;
        border-right: 1px solid #ddd;
        background: #f9f9f9;
      }
    `,
    `
      .content {
        flex-grow: 1;
        padding: 20px;
        overflow-y: auto;
      }
    `,
  ],
})
export class CourseLayoutComponent implements OnInit {
  course: any;

  constructor(private route: ActivatedRoute, private courseSrv: CursoService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const courseId = params.get('courseId');
      if (courseId) {
        this.course = this.courseSrv.getCourseById(courseId);
      }
    });
  }
}
