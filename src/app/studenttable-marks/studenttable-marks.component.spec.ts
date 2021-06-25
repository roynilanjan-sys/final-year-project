import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTableMarksComponent } from './studenttable-marks.component'

describe('StudentTableMarksComponent', () => {
  let component: StudentTableMarksComponent;
  let fixture: ComponentFixture<StudentTableMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTableMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTableMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
