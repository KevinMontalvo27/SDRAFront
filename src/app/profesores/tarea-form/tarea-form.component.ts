import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic-form',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h2>Agregar Tema</h2>
  <form>
    <label>Nombre:<input type="text"/></label>
    <label>Descripción/Objetivo:<textarea></textarea></label>
    <button type="submit">Guardar</button>
  </form>
  `
})
export class TopicFormComponent {}
