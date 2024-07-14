import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSubReducer from './sub-types.reducer';
import { SubTypesState } from './sub-types.reducer';

export const selectSubState = createFeatureSelector<SubTypesState>(
  fromSubReducer.TypesFeatureKey
);

export const selectSubTypes = createSelector(
  selectSubState,
  (state: SubTypesState) => state.subTypes
);
