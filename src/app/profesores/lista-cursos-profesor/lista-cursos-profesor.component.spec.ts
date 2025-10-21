import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCursosProfesorComponent } from './lista-cursos-profesor.component';

describe('ListaCursosProfesorComponent', () => {
  let component: ListaCursosProfesorComponent;
  let fixture: ComponentFixture<ListaCursosProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCursosProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCursosProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
