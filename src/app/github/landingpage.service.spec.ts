import { TestBed, inject } from '@angular/core/testing';

import { LandingpageService } from './landingpage.service';

describe('LandingpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandingpageService]
    });
  });

  it('should be created', inject([LandingpageService], (service: LandingpageService) => {
    expect(service).toBeTruthy();
  }));
});
