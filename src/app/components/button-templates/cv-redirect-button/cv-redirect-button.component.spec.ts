import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvRedirectButtonComponent } from './cv-redirect-button.component';

describe('CvRedirectButtonComponent', () => {
  let component: CvRedirectButtonComponent;
  let fixture: ComponentFixture<CvRedirectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvRedirectButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CvRedirectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
