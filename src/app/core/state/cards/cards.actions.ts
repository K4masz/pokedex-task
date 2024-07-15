import { createAction, props } from '@ngrx/store';
import { FilterValues } from '../../../features/pokemons-list/presentational/filters/filters.component';
import { Card } from '../../models/model';
import { PokemonCatalogResponse } from '../../models/util-types';

export enum CardsActionTypes{
  LOAD_CARDS_PAGE = '[Cards] Load Cards Page',

  CARDS_LOADED_SUCCESS = '[PokemonCTG API] Cards Loaded Successfully',
  CARDS_LOADED_ERROR = '[PokemonCTG API] Cards Load Error',

  CHANGE_PAGE = '[Cards] Page Change'
}

export const loadCardsPage = createAction(CardsActionTypes.LOAD_CARDS_PAGE, props<{page: number, filters?: FilterValues}>());

export const cardsLoadedSuccess = createAction(CardsActionTypes.CARDS_LOADED_SUCCESS, props<{response: PokemonCatalogResponse<Card>}>());
export const cardsLoadError = createAction(CardsActionTypes.CARDS_LOADED_ERROR, props<{error: string}>());

export const changePage = createAction(CardsActionTypes.CHANGE_PAGE, props<{newPage: number}>());
