import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviewResultComponent } from './adview-result.component';

describe('AdviewResultComponent', () => {
  let component: AdviewResultComponent;
  let fixture: ComponentFixture<AdviewResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviewResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
