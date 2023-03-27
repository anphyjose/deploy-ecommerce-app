import { TestBed } from '@angular/core/testing';

import { CollegeWebsiteService } from './college-website.service';

describe('CollegeWebsiteService', () => {
  let service: CollegeWebsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegeWebsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
