import { TestBed } from '@angular/core/testing';

import { PokemonCatalogApiService } from './pokemon-catalog-api.service';

describe('PokemonCatalogApiService', () => {
  let service: PokemonCatalogApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCatalogApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
