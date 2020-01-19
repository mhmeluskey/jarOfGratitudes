import { TestBed } from '@angular/core/testing';

import { GratService } from './grat.service';

describe('GratService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GratService = TestBed.get(GratService);
    expect(service).toBeTruthy();
  });
});
