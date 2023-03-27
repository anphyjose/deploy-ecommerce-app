import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdregInsertComponent } from './adreg-insert.component';

describe('AdregInsertComponent', () => {
  let component: AdregInsertComponent;
  let fixture: ComponentFixture<AdregInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdregInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdregInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
