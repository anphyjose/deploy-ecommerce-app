import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStudentinfoComponent } from './ad-studentinfo.component';

describe('AdStudentinfoComponent', () => {
  let component: AdStudentinfoComponent;
  let fixture: ComponentFixture<AdStudentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdStudentinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdStudentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
