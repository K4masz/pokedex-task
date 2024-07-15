import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCurrentCardReducer from './current-card.reducer';
import { CurrentCardState } from './current-card.reducer';


export const selectCurrentCardState = createFeatureSelector<fromCurrentCardReducer.CurrentCardState>(
  fromCurrentCardReducer.CurrentCardFeatureKey
);

export const selectCurrentCard = createSelector(
  selectCurrentCardState,
  (state: CurrentCardState) => state.card
);

export const selectSimilarCards = createSelector(
  selectCurrentCardState,
  (state: CurrentCardState) => state.similarCards
)
