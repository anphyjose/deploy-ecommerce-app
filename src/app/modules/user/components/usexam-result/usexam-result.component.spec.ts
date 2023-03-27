import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsexamResultComponent } from './usexam-result.component';

describe('UsexamResultComponent', () => {
  let component: UsexamResultComponent;
  let fixture: ComponentFixture<UsexamResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsexamResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsexamResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
