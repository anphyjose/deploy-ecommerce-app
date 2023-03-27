import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionpageComponent } from './admissionpage.component';

describe('AdmissionpageComponent', () => {
  let component: AdmissionpageComponent;
  let fixture: ComponentFixture<AdmissionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
