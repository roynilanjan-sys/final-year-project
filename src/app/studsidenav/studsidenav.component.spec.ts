import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudSidenavComponent } from './studsidenav.component';

describe('StudSidenavComponent', () => {
  let component: StudSidenavComponent;
  let fixture: ComponentFixture<StudSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
