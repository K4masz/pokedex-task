import { createReducer, on } from '@ngrx/store';
import { FilterValues } from '../../../features/pokemons-list/presentational/filters/filters.component';
import { Card } from '../../models/model';
import { PokemonCatalogResponse } from '../../models/util-types';
import { cardsLoadedSuccess, cardsLoadError, changeFilters, changeIndex, changePage, loadCardsPage, resetIndex, updateCardAtIndex } from './cards.actions';



export const CardsFeatureKey = 'cards';

export interface CardsState {
  pages: { [pageNumber: string]: Card[]};
  totalCount: number;
  currentPage: number;
  currentIndex?: number;
  filters: FilterValues;
}

export const initialCardsState: CardsState = {
  filters: {
    superType: null,
    subTypes: [],
    types: []
  },
  pages: {},
  currentPage: 1,
  currentIndex: -1,
  totalCount: 0
};

export const cardsReducer = createReducer(
  initialCardsState,
  on(loadCardsPage, state => onLoadCards(state)),
  on(cardsLoadedSuccess, (state, action) => onCardsLoadedSuccess(state, action.response)),
  on(cardsLoadError, (state, action) => onCardsLoadError(state, action.error)),
  on(changePage, (state, action) => onPageChange(state, action.newPage)),
  on(changeFilters, (state, action) => onFiltersChange(state, action.filters)),
  on(changeIndex, (state, action) => onIndexChange(state, action.newIndex)),
  on(resetIndex, (state)=> onResetIndex(state)),
  on(updateCardAtIndex, (state, action) => onUpdateCardAtIndex(state, action.updatedCard))
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
  return { ...state, currentPage: newPage, currentIndex: initialCardsState.currentIndex}
}

export function onFiltersChange(state: CardsState, filters: FilterValues){
  return {...initialCardsState, filters}
}

export function onIndexChange(state: CardsState, newIndex: number){
  return {...state, currentIndex: newIndex}
}

export function onResetIndex(state: CardsState){
  return {...state, currentIndex: initialCardsState.currentIndex}
}

export function onUpdateCardAtIndex(state: CardsState, updatedCard: Card){
  const page = [...state.pages[state.currentPage]]
  page[state.currentIndex!] = updatedCard;

  return {
    ...state,
    pages: {
      ...state.pages,
      [state.currentPage]: [
        ...page
      ]
    }
  }
}
