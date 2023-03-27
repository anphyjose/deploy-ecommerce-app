import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdexamRegComponent } from './adexam-reg.component';

describe('AdexamRegComponent', () => {
  let component: AdexamRegComponent;
  let fixture: ComponentFixture<AdexamRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdexamRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdexamRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
