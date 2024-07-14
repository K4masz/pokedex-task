import { createReducer, on } from '@ngrx/store';
import { loadTypes, typesLoadedSuccess, typesLoadError } from './types.actions';


export const TypesFeatureKey = 'Types';

export interface TypesState {
  types: string[];
  error?: string;
}

export const initialTypesState: TypesState = {
  types: [],
};

export const typesReducer = createReducer(
  initialTypesState,
  on(loadTypes, state => onLoadTypes(state)),
  on(typesLoadedSuccess, (state, action) => onTypesLoadedSuccess(state, action.types)),
  on(typesLoadError, (state, action) => onTypesLoadError(state, action.error))
)

export function onLoadTypes(state: TypesState) {
  return { ...state }
}

export function onTypesLoadedSuccess(state: TypesState, types: string[]) {
  return { ...state, types }
}
export function onTypesLoadError(state: TypesState, error: string) {
  return { ...state, error }
}
