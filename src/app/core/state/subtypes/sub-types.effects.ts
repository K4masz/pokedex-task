import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PokemonCatalogApiService } from '../../services/data-access-api/pokemon-catalog-api.service';
import { SubTypeActionTypes } from './sub-types.actions';

@Injectable({ providedIn: 'root' })
export class SubTypesEffects {
  actions$ = inject(Actions);
  pokemonCatalogApiService = inject(PokemonCatalogApiService)

  loadSubTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubTypeActionTypes.LOAD_SUB_TYPES),
      mergeMap(() => this.pokemonCatalogApiService.getSubTypes()
        .pipe(
          map((response: {data:string[]}) => ({ type: SubTypeActionTypes.SUB_TYPES_LOADED_SUCCESS, subTypes: response.data })),
          catchError((err) => of({type: SubTypeActionTypes.SUB_TYPES_LOADED_ERROR, error: err}))
        )
      )
    )
  );

}
