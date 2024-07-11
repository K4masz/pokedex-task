import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { typesReducer } from './types/types.reducer';

export interface State {}

export const reducers : ActionReducerMap<State> = {
  counter: counterReducer,
  types: typesReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
