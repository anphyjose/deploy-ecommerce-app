import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsadmissionDetailsComponent } from './usadmission-details.component';

describe('UsadmissionDetailsComponent', () => {
  let component: UsadmissionDetailsComponent;
  let fixture: ComponentFixture<UsadmissionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsadmissionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsadmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
