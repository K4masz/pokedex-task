import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { SubTypesEffects } from './subtypes/sub-types.effects';
import { subTypesReducer } from './subtypes/sub-types.reducer';
import { SuperTypesEffects } from './supertypes/super-types.effects';
import { superTypesReducer } from './supertypes/super-types.reducer';
import { TypeEffects } from './types/types.effects';
import { typesReducer } from './types/types.reducer';

export interface State {}

export const reducers : ActionReducerMap<State> = {
  types: typesReducer,
  superTypes: superTypesReducer,
  subTypes: subTypesReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

export const effects = [
  TypeEffects,
  SuperTypesEffects,
  SubTypesEffects
]
