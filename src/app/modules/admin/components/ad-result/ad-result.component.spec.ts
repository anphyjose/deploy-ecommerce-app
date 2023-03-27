import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdResultComponent } from './ad-result.component';

describe('AdResultComponent', () => {
  let component: AdResultComponent;
  let fixture: ComponentFixture<AdResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
