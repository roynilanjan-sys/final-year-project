import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTcrProfileComponent } from './edit-tcr-profile.component';

describe('EditTcrProfileComponent', () => {
  let component: EditTcrProfileComponent;
  let fixture: ComponentFixture<EditTcrProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTcrProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTcrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
