import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsexamloginComponent } from './usexamlogin.component';

describe('UsexamloginComponent', () => {
  let component: UsexamloginComponent;
  let fixture: ComponentFixture<UsexamloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsexamloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsexamloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
