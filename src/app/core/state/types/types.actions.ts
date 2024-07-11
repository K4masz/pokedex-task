import { createAction, props } from '@ngrx/store';

export enum TypeActionTypes{
  LOAD_TYPES = '[Types] Load Types',

  TYPES_LOADED_SUCCESS = '[PokemonCTG API] Types Loaded Successfully',
  TYPES_LOADED_ERROR = '[PokemonCTG API] Types Load Error'
}

export const loadTypes = createAction(TypeActionTypes.LOAD_TYPES);

export const typesLoadedSuccess = createAction(TypeActionTypes.TYPES_LOADED_SUCCESS, props<{types: string[]}>());
export const typesLoadError = createAction(TypeActionTypes.TYPES_LOADED_ERROR, props<{error: string}>());
