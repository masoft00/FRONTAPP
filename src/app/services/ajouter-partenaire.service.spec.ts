import { TestBed } from '@angular/core/testing';

import { AjouterPartenaireService } from './ajouter-partenaire.service';

describe('AjouterPartenaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjouterPartenaireService = TestBed.get(AjouterPartenaireService);
    expect(service).toBeTruthy();
  });
});
