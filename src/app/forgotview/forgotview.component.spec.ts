import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotviewComponent } from './forgotview.component';

describe('ForgotviewComponent', () => {
  let component: ForgotviewComponent;
  let fixture: ComponentFixture<ForgotviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
