import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CardsEffects } from './cards/cards.effects';
import { cardsReducer } from './cards/cards.reducer';
import { CurrentCardEffects } from './current-card/current-card.effects';
import { currentCardReducer } from './current-card/current-card.reducer';
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
  subTypes: subTypesReducer,
  cards: cardsReducer,
  currentCard: currentCardReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

export const effects = [
  TypeEffects,
  SuperTypesEffects,
  SubTypesEffects,
  CardsEffects,
  CurrentCardEffects
]
