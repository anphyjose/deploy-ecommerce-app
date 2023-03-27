import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdregActivitiesComponent } from './adreg-activities.component';

describe('AdregActivitiesComponent', () => {
  let component: AdregActivitiesComponent;
  let fixture: ComponentFixture<AdregActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdregActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdregActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
