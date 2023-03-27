import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStudentviewComponent } from './ad-studentview.component';

describe('AdStudentviewComponent', () => {
  let component: AdStudentviewComponent;
  let fixture: ComponentFixture<AdStudentviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdStudentviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdStudentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
