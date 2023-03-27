import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserportComponent } from './userport.component';

describe('UserportComponent', () => {
  let component: UserportComponent;
  let fixture: ComponentFixture<UserportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
