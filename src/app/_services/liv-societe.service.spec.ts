import { TestBed } from '@angular/core/testing';

import { LivSocieteService } from './liv-societe.service';

describe('LivSocieteService', () => {
  let service: LivSocieteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivSocieteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
