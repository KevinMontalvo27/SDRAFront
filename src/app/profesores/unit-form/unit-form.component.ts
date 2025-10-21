import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unit-form',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h2>Agregar Unidad</h2>
  <form>
    <label>Nombre:<input type="text"/></label>
    <label>Descripción/Objetivo:<textarea></textarea></label>
    <label>Posición:<select><option>Antes de...</option><option>Después de...</option></select></label>
    <button type="submit">Guardar</button>
  </form>
  `
})
export class UnitFormComponent {}
