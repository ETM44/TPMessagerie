import { TestBed } from '@angular/core/testing';

import { BlagueService } from './blague.service';

describe('BlagueService', () => {
  let service: BlagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
