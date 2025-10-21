import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoLayoutComponent } from './curso-layout.component';

describe('CursoLayoutComponent', () => {
  let component: CursoLayoutComponent;
  let fixture: ComponentFixture<CursoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
