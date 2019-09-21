import { TestBed } from '@angular/core/testing';

import { AjouterCaissierService } from './ajouter-caissier.service';

describe('AjouterCaissierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjouterCaissierService = TestBed.get(AjouterCaissierService);
    expect(service).toBeTruthy();
  });
});
