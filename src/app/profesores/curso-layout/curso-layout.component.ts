import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { TeacherSidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-teacher-course-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, TeacherSidebarComponent],
  template: `
  <div class="layout">
    <aside class="sidebar">
      <app-teacher-sidebar [units]="course?.units" (unitAdded)="reload()" (topicAdded)="reload()"></app-teacher-sidebar>
    </aside>
    <main class="content">
      <router-outlet></router-outlet>
    </main>
  </div>
  `,
  styles: [
    `.layout{display:flex;height:100vh}`,
    `.sidebar{width:280px;border-right:1px solid #ddd;background:#f9f9f9}`,
    `.content{flex:1;overflow:auto;padding:20px}`
  ]
})
export class TeacherCourseLayoutComponent implements OnInit {
  course: any;

  constructor(private route: ActivatedRoute, private courseSrv: CursoService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const courseId = params.get('courseId');
      if (courseId) {
        this.course = this.courseSrv.getCourseById(courseId);
      }
    });
  }

  reload() {
    if (this.course?.id) {
      this.course = this.courseSrv.getCourseById(this.course.id);
    }
  }
}
