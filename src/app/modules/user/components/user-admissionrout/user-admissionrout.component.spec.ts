import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdmissionroutComponent } from './user-admissionrout.component';

describe('UserAdmissionroutComponent', () => {
  let component: UserAdmissionroutComponent;
  let fixture: ComponentFixture<UserAdmissionroutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdmissionroutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdmissionroutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
