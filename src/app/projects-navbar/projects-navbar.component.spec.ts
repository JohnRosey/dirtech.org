import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsNavbarComponent } from './projects-navbar.component';

describe('ProjectsNavbarComponent', () => {
  let component: ProjectsNavbarComponent;
  let fixture: ComponentFixture<ProjectsNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsNavbarComponent]
    });
    fixture = TestBed.createComponent(ProjectsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
