import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCardsReducer from './cards.reducer';
import { CardsState } from './cards.reducer';


export const selectCardsState = createFeatureSelector<fromCardsReducer.CardsState>(
  fromCardsReducer.CardsFeatureKey
);

export const selectCurrentPageNumber = createSelector(
  selectCardsState,
  (state: CardsState) => state.currentPage
)

export const selectCurrentCardsPage = createSelector(
  selectCardsState,
  (state: CardsState) => state.pages[state.currentPage]
)

export const selectIndexFromCurrentPage = createSelector(
  selectCardsState,
  (state: CardsState) => {
    if (state.currentPage && typeof state.currentIndex === 'number' && state.currentIndex > -1)
      return state.pages[state.currentPage][state.currentIndex]
    else
      return null;
  }
)

export const selectCurrentPageAsDatasource = createSelector(
  selectCardsState,
  (state: CardsState) => ({data: state.pages[state.currentPage], page: state.currentPage, totalCount: state.totalCount})
)

export const selectFiltersValues = createSelector(
  selectCardsState,
  (state: CardsState) => state.filters
)

export const selectAllCards = createSelector(
  selectCardsState,
  (state: CardsState) => Object.values(state.pages).flat(2)
)
