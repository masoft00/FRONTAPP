import { TestBed } from '@angular/core/testing';

import { AjouterCompteService } from './ajouter-compte.service';

describe('AjouterCompteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjouterCompteService = TestBed.get(AjouterCompteService);
    expect(service).toBeTruthy();
  });
});
