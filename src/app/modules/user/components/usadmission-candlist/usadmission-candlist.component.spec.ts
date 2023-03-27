import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsadmissionCandlistComponent } from './usadmission-candlist.component';

describe('UsadmissionCandlistComponent', () => {
  let component: UsadmissionCandlistComponent;
  let fixture: ComponentFixture<UsadmissionCandlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsadmissionCandlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsadmissionCandlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
