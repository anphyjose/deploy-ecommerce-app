import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviewresuiltEditComponent } from './adviewresuilt-edit.component';

describe('AdviewresuiltEditComponent', () => {
  let component: AdviewresuiltEditComponent;
  let fixture: ComponentFixture<AdviewresuiltEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviewresuiltEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviewresuiltEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
