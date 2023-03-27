import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsexamRegComponent } from './usexam-reg.component';

describe('UsexamRegComponent', () => {
  let component: UsexamRegComponent;
  let fixture: ComponentFixture<UsexamRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsexamRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsexamRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
