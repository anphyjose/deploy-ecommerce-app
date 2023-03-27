import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URegComponent } from './u-reg.component';

describe('URegComponent', () => {
  let component: URegComponent;
  let fixture: ComponentFixture<URegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ URegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(URegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
