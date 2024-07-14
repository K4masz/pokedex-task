import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PokemonCatalogApiService } from '../../services/data-access-api/pokemon-catalog-api.service';
import { SuperTypeActionTypes } from './super-types.actions';

@Injectable({ providedIn: 'root' })
export class SuperTypesEffects {
  actions$ = inject(Actions);
  pokemonCatalogApiService = inject(PokemonCatalogApiService)

  loadSuperTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SuperTypeActionTypes.LOAD_SUPER_TYPES),
      mergeMap(() => this.pokemonCatalogApiService.getSuperTypes()
        .pipe(
          map((response: {data:string[]}) => ({ type: SuperTypeActionTypes.SUPER_TYPES_LOADED_SUCCESS, superTypes: response.data })),
          catchError((err) => of({type: SuperTypeActionTypes.SUPER_TYPES_LOADED_ERROR, error: err}))
        )
      )
    )
  );

}
