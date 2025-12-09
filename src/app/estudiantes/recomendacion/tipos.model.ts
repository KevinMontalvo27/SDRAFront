export type LearningStyle = 'activo' | 'sensorial' | 'visual' | 'secuencial' | 'global' | 'reflexivo' | 'intuitivo' | 'verbal';

export interface LearningProfile {
  id: string;
  nombre: string;
  nro_cuenta?: string;
  style: LearningStyle;
}

export interface Course {
  id: string;
  id_profesor?: string;
  nombre: string;
  grupo: number;
  units: Unit[];
}

export interface Unit {
  id: string;
  id_materia: string;
  numero_unidad: number;
  nombre: string;
  descripcion?: string;
  temas: Topic[];
}

export interface Topic {
  id: number;
  id_unidad: number;
  nombre: string;
  numero_tema: number;
  descripcion?: string;
  subtemas?: string[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'image' | 'document' | 'external';
  url: string;
  tags?: string[];
  suitability?: LearningStyle;
  description?: string;
  estiloTipo?: string;
}
