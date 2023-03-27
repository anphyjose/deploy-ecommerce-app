import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaddResultComponent } from './adadd-result.component';

describe('AdaddResultComponent', () => {
  let component: AdaddResultComponent;
  let fixture: ComponentFixture<AdaddResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaddResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdaddResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
