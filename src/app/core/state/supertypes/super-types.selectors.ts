import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSuperTypesReducer from './super-types.reducer';
import { SuperTypesState } from './super-types.reducer';

export const selectSuperTypesState = createFeatureSelector<SuperTypesState>(
  fromSuperTypesReducer.TypesFeatureKey
);

export const selectSuperTypes = createSelector(
  selectSuperTypesState,
  (state: SuperTypesState) => state.superTypes
);
