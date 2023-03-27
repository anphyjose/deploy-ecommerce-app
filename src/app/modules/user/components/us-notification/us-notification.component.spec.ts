import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsNotificationComponent } from './us-notification.component';

describe('UsNotificationComponent', () => {
  let component: UsNotificationComponent;
  let fixture: ComponentFixture<UsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
