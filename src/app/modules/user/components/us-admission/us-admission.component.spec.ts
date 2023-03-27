import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsAdmissionComponent } from './us-admission.component';

describe('UsAdmissionComponent', () => {
  let component: UsAdmissionComponent;
  let fixture: ComponentFixture<UsAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsAdmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
