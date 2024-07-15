import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCardsReducer from './cards.reducer';
import { CardsState } from './cards.reducer';


export const selectCardsState = createFeatureSelector<fromCardsReducer.CardsState>(
  fromCardsReducer.CardsFeatureKey
);

export const selectCards = createSelector(
  selectCardsState,
  (state: CardsState) => state.cards
);

export const selectCurrentPage = createSelector(
  selectCardsState,
  (state: CardsState) => state.currentPage
)

export const selectCurrentCardsPage = createSelector(
  selectCardsState,
  (state: CardsState) => state.pages[state.currentPage]
)

export const selectCurrentPageAsDatasource = createSelector(
  selectCardsState,
  (state: CardsState) => ({ data: state.pages[state.currentPage], page: state.currentPage, totalCount: state.totalCount})
)
