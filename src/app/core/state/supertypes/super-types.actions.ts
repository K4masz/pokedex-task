import { createAction, props } from '@ngrx/store';

export enum SuperTypeActionTypes{
  LOAD_SUPER_TYPES = '[Types] Load Super Types',

  SUPER_TYPES_LOADED_SUCCESS = '[PokemonCTG API] Super Types Loaded Successfully',
  SUPER_TYPES_LOADED_ERROR = '[PokemonCTG API] Super Types Load Error'
}

export const loadSuperTypes = createAction(SuperTypeActionTypes.LOAD_SUPER_TYPES);

export const superTypesLoadedSuccess = createAction(SuperTypeActionTypes.SUPER_TYPES_LOADED_SUCCESS, props<{superTypes: string[]}>());
export const superTypesLoadError = createAction(SuperTypeActionTypes.SUPER_TYPES_LOADED_ERROR, props<{error: string}>());
