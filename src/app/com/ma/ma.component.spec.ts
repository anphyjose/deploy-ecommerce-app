import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaComponent } from './ma.component';

describe('MaComponent', () => {
  let component: MaComponent;
  let fixture: ComponentFixture<MaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
