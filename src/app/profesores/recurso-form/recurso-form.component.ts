import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-form',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h2>Agregar Objeto de Aprendizaje</h2>
  <form>
    <label>Nombre:<input type="text"/></label>
    <label>Descripción:<textarea></textarea></label>
    <select>
      <option value="video">Video</option>
      <option value="animation">Animación</option>
      <option value="document">Documento</option>
      <option value="quiz">Quiz</option>
    </select>
    <button type="submit">Guardar</button>
  </form>
  `
})
export class ResourceFormComponent {}
