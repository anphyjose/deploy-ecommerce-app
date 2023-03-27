import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsStudentdetailsComponent } from './us-studentdetails.component';

describe('UsStudentdetailsComponent', () => {
  let component: UsStudentdetailsComponent;
  let fixture: ComponentFixture<UsStudentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsStudentdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsStudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
