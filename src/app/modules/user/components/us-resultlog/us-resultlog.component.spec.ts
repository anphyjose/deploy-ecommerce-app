import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsResultlogComponent } from './us-resultlog.component';

describe('UsResultlogComponent', () => {
  let component: UsResultlogComponent;
  let fixture: ComponentFixture<UsResultlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsResultlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsResultlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
