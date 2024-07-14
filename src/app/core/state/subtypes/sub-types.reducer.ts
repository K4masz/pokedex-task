import { createReducer, on } from '@ngrx/store';
import { loadSubTypes, subTypesLoadedSuccess, subTypesLoadError } from './sub-types.actions';


export const TypesFeatureKey = 'subTypes';

export interface SubTypesState {
  subTypes: string[];
  error?: string;
}

export const initialSubTypesState: SubTypesState = {
  subTypes: [],
};

export const subTypesReducer = createReducer(
  initialSubTypesState,
  on(loadSubTypes, state => onLoadSubTypes(state)),
  on(subTypesLoadedSuccess, (state, action) => onSubTypesLoadedSuccess(state, action.subTypes)),
  on(subTypesLoadError, (state, action) => onSubTypesLoadError(state, action.error))
)

export function onLoadSubTypes(state: SubTypesState) {
  return { ...state }
}

export function onSubTypesLoadedSuccess(state: SubTypesState, subTypes: string[]) {
  return { ...state, subTypes }
}
export function onSubTypesLoadError(state: SubTypesState, error: string) {
  return { ...state, error }
}
