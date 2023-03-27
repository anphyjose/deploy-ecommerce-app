import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsadmissionUpdateComponent } from './usadmission-update.component';

describe('UsadmissionUpdateComponent', () => {
  let component: UsadmissionUpdateComponent;
  let fixture: ComponentFixture<UsadmissionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsadmissionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsadmissionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
