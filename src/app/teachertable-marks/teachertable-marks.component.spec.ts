import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTableMarksComponent } from './teachertable-marks.component';

describe('TeacherTableMarksComponent', () => {
  let component: TeacherTableMarksComponent;
  let fixture: ComponentFixture<TeacherTableMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTableMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTableMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
