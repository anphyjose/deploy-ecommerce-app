import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStudentaddComponent } from './ad-studentadd.component';

describe('AdStudentaddComponent', () => {
  let component: AdStudentaddComponent;
  let fixture: ComponentFixture<AdStudentaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdStudentaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdStudentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
