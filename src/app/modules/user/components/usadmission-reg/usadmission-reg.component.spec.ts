import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsadmissionRegComponent } from './usadmission-reg.component';

describe('UsadmissionRegComponent', () => {
  let component: UsadmissionRegComponent;
  let fixture: ComponentFixture<UsadmissionRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsadmissionRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsadmissionRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
