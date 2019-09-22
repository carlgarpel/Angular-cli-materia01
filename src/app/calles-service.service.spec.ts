import { TestBed } from '@angular/core/testing';

import { CallesServiceService } from './calles-service.service';

describe('CallesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallesServiceService = TestBed.get(CallesServiceService);
    expect(service).toBeTruthy();
  });
});
