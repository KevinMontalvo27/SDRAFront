import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RecommendationService } from '../../services/recomendacion.service';
import { Topic } from '../recomendacion/tipos.model';
import { TemaComponent } from "../tema/tema.component";

@Component({
  selector: 'app-subject-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="content" *ngIf="unitId">
      <header class="title-section">
        <h2>{{ unit?.title }}</h2>
        <p class="objective">{{ unit?.objective }}</p>
      </header>

      <div class="description">
        <h3>Descripción</h3>
        <div class="desc-text">Descripción del contenido de la unidad.</div>
      </div>

      <div *ngIf="topics && topics.length > 0" class="topics">
        <h3>Temas</h3>
        <div *ngFor="let topic of topics" class="topic-card">
          <h4><a [routerLink]="['topic', topic.id]">{{ topic.name }}</a></h4>
          <!-- <div
            *ngIf="topic.learningObjects && topic.learningObjects.length > 0"
            class="resources-grid"
          >
            <h3>Recursos recomendados</h3>
            <app-tema
              *ngFor="let topic of topics"
              [topic]="topic"
            ></app-tema>
          </div> -->
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .content {
        padding: 20px;
      }
    `,
  ],
})
export class SubjectContentComponent implements OnInit {
  unitId?: string;
  unit: any;
  topics: Topic[] = [];

  constructor(
    private route: ActivatedRoute,
    private recSrv: RecommendationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.unitId = id ?? undefined;
      if (this.unitId) {
        this.unit = this.recSrv.getUnitById(this.unitId);
        this.topics = this.recSrv.getTopics(this.unitId);
      }
    });
  }
}
