import { createReducer, on } from '@ngrx/store';
import { FilterValues } from '../../../features/pokemons-list/presentational/filters/filters.component';
import { Card } from '../../models/model';
import { PokemonCatalogResponse } from '../../models/util-types';
import { cardsLoadedSuccess, cardsLoadError, changeFilters, changePage, loadCardsPage } from './cards.actions';



export const CardsFeatureKey = 'cards';

export interface CardsState {
  cards: Card[]; //TODO: remove
  pages: { [pageNumber: string]: Card[]};
  totalCount: number;
  currentPage: number;
  filters: FilterValues;
  error?: string;
  dirty: boolean;
}

export const initialCardsState: CardsState = {
  cards: [],
  filters: {
    superType: null,
    subTypes: [],
    types: []
  },
  pages: {},
  currentPage: 1,
  totalCount: 0,
  dirty: false
};

export const cardsReducer = createReducer(
  initialCardsState,
  on(loadCardsPage, state => onLoadCards(state)),
  on(cardsLoadedSuccess, (state, action) => onCardsLoadedSuccess(state, action.response)),
  on(cardsLoadError, (state, action) => onCardsLoadError(state, action.error)),
  on(changePage, (state, action) => onPageChange(state, action.newPage)),
  on(changeFilters, (state, action) => onFiltersChange(state, action.filters)),

)

export function onLoadCards(state: CardsState) {
  return { ...state }
}

export function onCardsLoadedSuccess(state: CardsState, response: PokemonCatalogResponse<Card>) {
  return { ...state, totalCount: response.totalCount ?? 0, pages: { ...state.pages, [state.currentPage]: response.data } }
}

export function onCardsLoadError(state: CardsState, error: string) {
  return { ...state, error }
}

export function onPageChange(state: CardsState, newPage: number){
  return { ...state, currentPage: newPage}
}

export function onFiltersChange(state: CardsState, filters: FilterValues){
  return {...initialCardsState, filters}
}

