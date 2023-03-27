import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotDetailsComponent } from './forgot-details.component';

describe('ForgotDetailsComponent', () => {
  let component: ForgotDetailsComponent;
  let fixture: ComponentFixture<ForgotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
