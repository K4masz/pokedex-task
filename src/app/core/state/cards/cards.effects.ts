import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Card } from '../../models/model';
import { PokemonCatalogResponse } from '../../models/util-types';
import { PokemonCatalogApiService } from '../../services/data-access-api/pokemon-catalog-api.service';
import { CardsActionTypes } from './cards.actions';

@Injectable({ providedIn: 'root' })
export class CardsEffects {
  actions$ = inject(Actions);
  pokemonCatalogApiService = inject(PokemonCatalogApiService)

  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsActionTypes.LOAD_CARDS),
      mergeMap(() => this.pokemonCatalogApiService.getCards()
        .pipe(
          map((response: PokemonCatalogResponse<Card>) => ({ type: CardsActionTypes.CARDS_LOADED_SUCCESS, cards: response.data })),
          catchError((err) => of({type: CardsActionTypes.CARDS_LOADED_ERROR, error: err}))
        )
      )
    )
  );

}
