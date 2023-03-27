import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdmissionComponent } from './admin-admission.component';

describe('AdminAdmissionComponent', () => {
  let component: AdminAdmissionComponent;
  let fixture: ComponentFixture<AdminAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAdmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
