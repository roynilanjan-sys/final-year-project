import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudProfileComponent } from './edit-stud-profile.component';

describe('EditTcrProfileComponent', () => {
  let component: EditStudProfileComponent;
  let fixture: ComponentFixture<EditStudProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
