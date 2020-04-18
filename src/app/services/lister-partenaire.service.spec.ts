import { TestBed } from '@angular/core/testing';

import { ListerPartenaireService } from './lister-partenaire.service';

describe('ListerPartenaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListerPartenaireService = TestBed.get(ListerPartenaireService);
    expect(service).toBeTruthy();
  });
});
