import { TestBed } from '@angular/core/testing';

import { FindocService } from './findoc.service';

describe('FindocService', () => {
  let service: FindocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
