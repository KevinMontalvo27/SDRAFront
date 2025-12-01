import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resource } from './tipos.model';

@Component({
  selector: 'app-recommendation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recomendacion.component.html',
  styleUrls: ['./recomendacion.component.css']
})
export class RecomendacionComponent {
  @Input({ required: true }) resource!: Resource;

  scoreForCurrentStyle(res: Resource): number {
    const max = Math.max(
      ...Object.values(res.suitability ?? {}).map((v) => v ?? 0)
    );
    return max;
  }

  getEstiloTipo(): string {
    // Retorna el tipo del estilo_objeto o un valor por defecto
    return this.resource.estiloTipo || 'Recurso General';
  }
}
