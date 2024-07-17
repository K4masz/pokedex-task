import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Card } from '../../models/model';
import { PokemonCatalogResponse } from '../../models/util-types';
import { PokemonCatalogApiService } from '../../services/data-access-api/pokemon-catalog-api.service';
import { CurrentCardActionTypes } from './current-card.actions';

@Injectable({ providedIn: 'root' })
export class CurrentCardEffects {
  actions$ = inject(Actions);
  pokemonCatalogApiService = inject(PokemonCatalogApiService);

  fetchSimilarCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrentCardActionTypes.FETCH_SIMILAR_CARDS),
      mergeMap((action) => this.pokemonCatalogApiService.searchCards({ q: `artist:"${action.card.artist.toLowerCase()}"`, pageSize: 5 })
        .pipe(
          map((response: PokemonCatalogResponse<Card>) => ({ type: CurrentCardActionTypes.FETCH_SIMILAR_CARDS_SUCCESS, similarCards: response.data })),
          catchError((err) => of({ type: CurrentCardActionTypes.FETCH_SIMILAR_CARDS_ERROR, error: err }))
        ))
    )
  )
}

