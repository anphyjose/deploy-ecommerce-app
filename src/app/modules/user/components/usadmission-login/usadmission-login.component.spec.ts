import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsadmissionLoginComponent } from './usadmission-login.component';

describe('UsadmissionLoginComponent', () => {
  let component: UsadmissionLoginComponent;
  let fixture: ComponentFixture<UsadmissionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsadmissionLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsadmissionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
