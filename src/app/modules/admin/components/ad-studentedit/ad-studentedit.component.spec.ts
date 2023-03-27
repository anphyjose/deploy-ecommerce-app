import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStudenteditComponent } from './ad-studentedit.component';

describe('AdStudenteditComponent', () => {
  let component: AdStudenteditComponent;
  let fixture: ComponentFixture<AdStudenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdStudenteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdStudenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
