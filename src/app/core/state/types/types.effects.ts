import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PokemonCatalogApiService } from '../../services/data-access-api/pokemon-catalog-api.service';
import { TypeActionTypes } from './types.actions';

@Injectable({ providedIn: 'root' })
export class TypeEffects {
  actions$ = inject(Actions);
  pokemonCatalogApiService = inject(PokemonCatalogApiService)


  loadTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TypeActionTypes.LOAD_TYPES),
      mergeMap(() => this.pokemonCatalogApiService.getTypes()
        .pipe(
          map((response: {data:string[]}) => ({ type: TypeActionTypes.TYPES_LOADED_SUCCESS, types: response.data })),
          catchError((err) => of({type: TypeActionTypes.TYPES_LOADED_ERROR, error: err}))
        )
      )
    )
  );
}
