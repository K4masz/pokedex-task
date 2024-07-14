import { createAction, props } from '@ngrx/store';

export enum SubTypeActionTypes{
  LOAD_SUB_TYPES = '[Types] Load Sub Types',

  SUB_TYPES_LOADED_SUCCESS = '[PokemonCTG API] Sub Types Loaded Successfully',
  SUB_TYPES_LOADED_ERROR = '[PokemonCTG API] Sub Types Load Error'
}

export const loadSubTypes = createAction(SubTypeActionTypes.LOAD_SUB_TYPES);

export const subTypesLoadedSuccess = createAction(SubTypeActionTypes.SUB_TYPES_LOADED_SUCCESS, props<{subTypes: string[]}>());
export const subTypesLoadError = createAction(SubTypeActionTypes.SUB_TYPES_LOADED_ERROR, props<{error: string}>());
