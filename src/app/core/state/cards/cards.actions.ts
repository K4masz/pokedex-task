import { createAction, props } from '@ngrx/store';
import { FilterValues } from '../../../features/pokemons-list/presentational/filters/filters.component';
import { Card } from '../../models/model';
import { PokemonCatalogResponse } from '../../models/util-types';

export enum CardsActionTypes{
  LOAD_CARDS_PAGE = '[Cards] Load Cards Page',

  CARDS_LOADED_SUCCESS = '[PokemonCTG API] Cards Page Loaded Successfully',
  CARDS_LOADED_ERROR = '[PokemonCTG API] Cards Page Load Error',

  CHANGE_PAGE = '[Cards] Page Change',
  CHANGE_FILTERS = '[Cards] Filters Change',
  CHANGE_INDEX = '[Cards] Change Index',
  RESET_INDEX = '[Cards] Reset Index',
  UPDATE_CARD_AT_INDEX = '[Cards] Update Card At Index'
}

export const loadCardsPage = createAction(CardsActionTypes.LOAD_CARDS_PAGE, props<{page: number, filters?: FilterValues}>());

export const cardsLoadedSuccess = createAction(CardsActionTypes.CARDS_LOADED_SUCCESS, props<{response: PokemonCatalogResponse<Card>}>());
export const cardsLoadError = createAction(CardsActionTypes.CARDS_LOADED_ERROR, props<{error: string}>());

export const changePage = createAction(CardsActionTypes.CHANGE_PAGE, props<{newPage: number}>());
export const changeFilters = createAction(CardsActionTypes.CHANGE_FILTERS, props<{filters: FilterValues}>());

export const changeIndex = createAction(CardsActionTypes.CHANGE_INDEX, props<{newIndex: number}>());
export const resetIndex = createAction(CardsActionTypes.RESET_INDEX);

export const updateCardAtIndex = createAction(CardsActionTypes.UPDATE_CARD_AT_INDEX, props<{updatedCard: Card}>())
