import { createReducer, on } from '@ngrx/store';
import { loadSuperTypes, superTypesLoadedSuccess, superTypesLoadError } from './super-types.actions';


export const TypesFeatureKey = 'SuperTypes';

export interface SuperTypesState {
  superTypes: string[];
  error?: string;
}

export const initialSuperTypesState: SuperTypesState = {
  superTypes: [],
};

export const superTypesReducer = createReducer(
  initialSuperTypesState,
  on(loadSuperTypes, state => onLoadSuperTypes(state)),
  on(superTypesLoadedSuccess, (state, action) => onSuperTypesLoadedSuccess(state, action.superTypes)),
  on(superTypesLoadError, (state, action) => onSuperTypesLoadError(state, action.error))
)

export function onLoadSuperTypes(state: SuperTypesState) {
  return { ...state }
}

export function onSuperTypesLoadedSuccess(state: SuperTypesState, superTypes: string[]) {
  return { ...state, superTypes }
}
export function onSuperTypesLoadError(state: SuperTypesState, error: string) {
  return { ...state, error }
}
