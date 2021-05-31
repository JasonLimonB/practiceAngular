import { TestBed } from '@angular/core/testing';

import { DateVService } from './date-v.service';

describe('DateVService', () => {
  let service: DateVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
