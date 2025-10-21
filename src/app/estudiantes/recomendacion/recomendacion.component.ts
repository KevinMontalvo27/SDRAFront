import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resource } from './tipos.model';

@Component({
  selector: 'app-recommendation-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rec-card">
      <div class="rec-media">
        <ng-container [ngSwitch]="resource.type">
          <div *ngSwitchCase="'video'" class="media-placeholder">▶︎</div>
          <div *ngSwitchCase="'animation'" class="media-placeholder">🖼️</div>
          <div *ngSwitchCase="'document'" class="media-placeholder">📄</div>
          <div *ngSwitchDefault class="media-placeholder">🔹</div>
        </ng-container>
      </div>
      <div class="rec-body">
        <h4>{{ resource.title }}</h4>
        <p class="muted">
          {{ resource.type | uppercase }} • Adecuación:
          {{ scoreForCurrentStyle(resource) }}%
        </p>
        <p class="desc">{{ resource.description }}</p>
        <a [href]="resource.url" target="_blank" class="btn">Ver recurso</a>
      </div>
    </div>
  `,
  styles: [
    `
      .rec-card {
        display: flex;
        gap: 12px;
        padding: 12px;
        border: 1px solid #e6e6e6;
        border-radius: 8px;
        background: #fff;
      }
      .media-placeholder {
        width: 120px;
        height: 80px;
        background: #f4f4f8;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        border-radius: 6px;
      }
      h4 {
        margin: 0 0 6px 0;
      }
      .muted {
        color: #777;
        font-size: 12px;
        margin: 0 0 8px 0;
      }
      .desc {
        margin: 0 0 8px 0;
      }
      .btn {
        font-weight: 600;
        color: #1a73e8;
        text-decoration: none;
      }
    `,
  ],
})
export class RecomendacionComponent {
  @Input({ required: true }) resource!: Resource;

  // This helper will be replaced by real profile later; show max suitability as example
  scoreForCurrentStyle(res: Resource) {
    const max = Math.max(
      ...Object.values(res.suitability ?? {}).map((v) => v ?? 0)
    );
    return max;
  }
}
