import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdregUpdateComponent } from './adreg-update.component';

describe('AdregUpdateComponent', () => {
  let component: AdregUpdateComponent;
  let fixture: ComponentFixture<AdregUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdregUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdregUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
