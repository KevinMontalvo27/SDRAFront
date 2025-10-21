import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { RecommendationService } from 'src/app/services/recomendacion.service';
import { Topic } from '../recomendacion/tipos.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OaViewerComponent } from '../oa-viewer/oa-viewer.component';

@Component({
  selector: 'app-tema',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  template: `
    <div class="topic" *ngIf="topic">
      <h2 class="topic-title">{{ topic.name }}</h2>
      <div class="topic-desc" [innerText]="topic.description"></div>

      <h4 class="section-heading">Objetos de aprendizaje</h4>
      <div class="oa-list">
        <div *ngFor="let oa of topic.learningObjects" class="oa-card">
          <div class="oa-meta">
            <div class="oa-title">{{ oa.title }}</div>
            <div class="oa-desc">{{ oa.description }}</div>
          </div>
          <div class="oa-actions">
            <button mat-flat-button class="btn-view" (click)="openResource(oa)">
              Ver recurso
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .topic {
        padding: 20px;
      }
    `,
    `
      .topic-title {
        font-weight: 600;
        margin-bottom: 8px;
      }
    `,
    `
      .topic-desc {
        color: #555;
        margin-bottom: 16px;
      }
    `,
    `
      .section-heading {
        margin: 12px 0;
      }
    `,
    `
      .oa-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    `,
    `
      .oa-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        border: 1px solid #e6e6e6;
        border-radius: 8px;
        background: #fff;
      }
    `,
    `
      .oa-title {
        font-weight: 600;
      }
    `,
    `
      .oa-desc {
        color: #666;
        font-size: 13px;
      }
    `,
    `
      .btn-view {
        text-decoration: none;
        background: #0b5ed7;
        color: #fff;
        padding: 6px 10px;
        border-radius: 6px;
      }
    `,
  ],
})
export class TemaComponent implements OnInit {
  @Input() topic: Topic | undefined;
  constructor(
    private route: ActivatedRoute,
    private recSrv: RecommendationService,
    private dialog: MatDialog,
  ) {}

  openResource(oa: any): void {
    this.dialog.open(OaViewerComponent, {
      data: oa,
      width: '80%',
      maxWidth: '900px',
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const unitId = params.get('id') || '';
      const topicId = params.get('topicId') || '';
      this.topic = this.recSrv.getTopicById(unitId, topicId);
    });
  }
}
