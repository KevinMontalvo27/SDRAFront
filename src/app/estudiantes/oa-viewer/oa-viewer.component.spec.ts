import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OaViewerComponent } from './oa-viewer.component';

describe('OaViewerComponent', () => {
  let component: OaViewerComponent;
  let fixture: ComponentFixture<OaViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OaViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
