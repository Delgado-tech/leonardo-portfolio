import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDisplayPageTemplateComponent } from './project-display-page-template.component';

describe('ProjectDisplayPageTemplateComponent', () => {
  let component: ProjectDisplayPageTemplateComponent;
  let fixture: ComponentFixture<ProjectDisplayPageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDisplayPageTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectDisplayPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
