import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortOpenComponent } from './port-open.component';

describe('PortOpenComponent', () => {
  let component: PortOpenComponent;
  let fixture: ComponentFixture<PortOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
