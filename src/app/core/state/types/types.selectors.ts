import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTypesReducer from './types.reducer';
import { TypesState } from './types.reducer';

export const selectTypesState = createFeatureSelector<TypesState>(
  fromTypesReducer.TypesFeatureKey
);

export const selectTypes = createSelector(
  selectTypesState,
  (state: TypesState) => state.types
);
