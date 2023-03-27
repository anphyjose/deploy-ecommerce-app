import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmainComponent } from './usmain.component';

describe('UsmainComponent', () => {
  let component: UsmainComponent;
  let fixture: ComponentFixture<UsmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
