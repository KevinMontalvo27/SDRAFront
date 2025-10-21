import { Injectable } from '@angular/core';
import {
  Unit,
  Resource,
  LearningProfile,
  Topic,
} from '../estudiantes/recomendacion/tipos.model';

@Injectable({ providedIn: 'root' })
export class RecommendationService {
  private profile: LearningProfile = {
    id: 'p1',
    name: 'Pedro Acosta',
    style: 'visual',
  };

  private units: Unit[] = [
    {
      id: 'unit1',
      title: 'Unidad 1',
      objective: 'Introducción a la programación',
      topics: [
        {
          id: 'topic1',
          name: 'Algoritmos y pseudocódigo',
          description: 'Conceptos básicos de algoritmos',
          learningObjects: [
            {
              id: 'r1',
              title: 'Video: Qué es un algoritmo',
              type: 'external',
              url: 'https://www.youtube.com/watch?v=f10jKIslSUY&pp=ygUTcXVlIGVzIHVuIGFsZ29yaXRtbw%3D%3D',
              suitability: {
                visual: 90,
                auditory: 70,
                kinesthetic: 40,
                reading: 50,
              },
              description: 'Video introductorio',
            },
          ],
        },
      ],
    },
    {
      id: 'unit2',
      title: 'Unidad 2 - Estructuras Condicionales',
      objective: 'Aprender condicionales simples y anidados',
      topics: [
        {
          id: 'topic2',
          name: 'If, If-Else, Switch',
          description: 'Estructuras condicionales en programación',
          learningObjects: [
            {
              id: 'r10',
              title: 'Lectura: Estructuras condicionales',
              type: 'document',
              url: 'https://www.udb.edu.sv/udb_files/recursos_guias/informatica-tecnologico/programacion-de-algoritmos/2020/i/guia-3.pdf',
              suitability: {
                visual: 95,
                auditory: 30,
                kinesthetic: 60,
                reading: 40,
              },
              description:
                'Docuemento pdf del tema de estructuras condicionales',
            },
            {
              id: 'r11',
              title: 'Video: Estructuras condicionales (intro)',
              type: 'external',
              url: 'https://www.youtube.com/watch?v=5m9xSRVfEYM&pp=ygUZZXN0cnVjdHVyYXMgY29uZGljaW9uYWxlcw%3D%3D',
              suitability: {
                visual: 85,
                auditory: 80,
                kinesthetic: 40,
                reading: 50,
              },
              description: 'Breve video',
            },
            {
              id: 'r12',
              title: 'Diagrama: If-Else',
              type: 'image',
              url: 'https://images.wondershare.com/edrawmax/article2023/flowchart-if-else/if-else-statements-flowcharts-insight.jpg',
              suitability: {
                visual: 40,
                auditory: 30,
                kinesthetic: 20,
                reading: 95,
              },
              description: 'Ejemplos de estructuras condicionales',
            },
          ],
        },
      ],
    },
  ];
  getProfile(): LearningProfile {
    return this.profile;
  }
  getUnits(): Unit[] {
    return this.units;
  }
  getUnitById(id: string): Unit | undefined {
    return this.units.find((u) => u.id === id);
  }

  getTopics(unitId: string): Topic[] {
    const unit = this.getUnitById(unitId);
    return unit?.topics ?? [];
  }

  getTopicById(unitId: string, topicId: string): Topic | undefined {
    const unit = this.getUnitById(unitId);
    return unit?.topics.find((t) => t.id === topicId);
  }
}
