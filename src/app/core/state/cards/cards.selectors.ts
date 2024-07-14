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
