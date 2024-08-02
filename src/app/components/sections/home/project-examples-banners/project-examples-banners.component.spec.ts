import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExamplesBannersComponent } from './project-examples-banners.component';

describe('ProjectExamplesBannersComponent', () => {
  let component: ProjectExamplesBannersComponent;
  let fixture: ComponentFixture<ProjectExamplesBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectExamplesBannersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectExamplesBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
