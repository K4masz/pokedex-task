import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { superTypesReducer } from './supertypes/super-types.reducer';
import { typesReducer } from './types/types.reducer';

export interface State {}

export const reducers : ActionReducerMap<State> = {
  counter: counterReducer,
  types: typesReducer,
  superTypes: superTypesReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
