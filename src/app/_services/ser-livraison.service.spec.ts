import { TestBed } from '@angular/core/testing';

import { SerLivraisonService } from './ser-livraison.service';

describe('SerLivraisonService', () => {
  let service: SerLivraisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerLivraisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
