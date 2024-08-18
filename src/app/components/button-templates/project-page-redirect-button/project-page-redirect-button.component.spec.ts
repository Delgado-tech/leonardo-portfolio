import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPageRedirectButtonComponent } from './project-page-redirect-button.component';

describe('ProjectPageRedirectButtonComponent', () => {
  let component: ProjectPageRedirectButtonComponent;
  let fixture: ComponentFixture<ProjectPageRedirectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPageRedirectButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectPageRedirectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
