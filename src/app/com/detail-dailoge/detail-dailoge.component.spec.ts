import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDailogeComponent } from './detail-dailoge.component';

describe('DetailDailogeComponent', () => {
  let component: DetailDailogeComponent;
  let fixture: ComponentFixture<DetailDailogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDailogeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDailogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
