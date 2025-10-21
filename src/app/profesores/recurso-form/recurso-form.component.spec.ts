import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoFormComponent } from './recurso-form.component';

describe('RecursoFormComponent', () => {
  let component: RecursoFormComponent;
  let fixture: ComponentFixture<RecursoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecursoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecursoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
