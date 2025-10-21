import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Unit } from '../recomendacion/tipos.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="sidebar-nav">
      <h3>Unidades</h3>
      <div class="units">
        <div *ngFor="let unit of units" class="unit">
          <button class="unit-header" (click)="toggleUnit()">
            <span class="chev" [class.open]="open">▾</span>
            <a [routerLink]="['unit', unit.id]">{{ unit.title }}</a>
          </button>

          <ul *ngIf="open" class="topic-list">
            <li *ngFor="let topic of unit.topics" class="topic-item">
              <a
                [routerLink]="['unit', unit.id, 'topic', topic.id]"
                class="topic-link"
                >{{ topic.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
    `
      .sidebar {
        padding: 16px;
      }
    `,
    `
      .section-title {
        color: #666;
        font-weight: 600;
        margin-bottom: 8px;
      }
    `,
    `
      .general-list {
        list-style: none;
        padding: 0;
        margin: 0 0 12px 0;
      }
    `,
    `
      .general-item {
        padding: 10px 8px;
        border-radius: 8px;
        color: #444;
      }
    `,
    `
      .general-item.active {
        background: #103a8a;
        color: #fff;
      }
    `,
    `
      .unit {
        margin-top: 10px;
      }
    `,
    `
      .unit-header {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 8px 10px;
        background: #f1f5f9;
        border-radius: 6px;
        border: none;
        cursor: pointer;
      }
    `,
    `
      .unit-title {
        font-weight: 600;
        color: #1f2937;
      }
    `,
    `
      .chev {
        transition: transform 0.18s ease;
        transform: rotate(-90deg);
        font-size: 25px;
      }
    `,
    `
      .chev.open {
        transform: rotate(0deg);
      }
    `,
    ``,
    `
      .topic-list {
        list-style: none;
        padding: 8px 0 0 14px;
        margin: 6px 0;
      }
    `,
    `
      .topic-item {
        margin-bottom: 6px;
      }
    `,
    `
      .topic-link {
        display: block;
        color: #374151;
        text-decoration: none;
        padding: 6px;
        border-radius: 6px;
      }
    `,
    `
      .topic-link:hover {
        background: #e6f0ff;
        color: #0b3c8a;
      }
    `,
    `
      .active-topic {
        background: #0b3c8a;
        color: #fff;
      }
    `,
    `
      .sidebar-nav {
        padding: 16px;
        font-family: Arial;
      }
    `,
    `
      ul {
        list-style: none;
        padding: 0;
      }
    `,
    `
      li {
        margin-bottom: 8px;
      }
    `,
    `
      a {
        text-decoration: none;
        color: #333;
      }
    `,
    `
      a:hover {
        color: #1a73e8;
      }
    `,
  ],
})
export class SidebarComponent {
  @Input() units: Unit[] = [];
  @Input() courseId?: string;
  open = true;

  toggleUnit() {
    this.open = !this.open;
  }
}
