import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RecommendationService } from 'src/app/services/recomendacion.service';

@Component({
  selector: 'app-course-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  template: `
    <div class="layout">
      <aside class="sidebar">
        <app-sidebar [units]="units$ | async"></app-sidebar>
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
  units$!: any;

  constructor(
    private route: ActivatedRoute,
    private recomendacionSrv: RecommendationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const cursoId = params.get('cursoId');
      if (cursoId) {
        this.units$ = this.recomendacionSrv.getUnits(cursoId);
        this.units$.subscribe((data: any) => {
          console.log('Unidades obtenidas:', data);
        });
      }
    });
  }
}
