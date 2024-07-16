import { createReducer, on } from '@ngrx/store';
import { Card } from '../../models/model';
import { changeCurrentCard, fetchSimilarCards } from './current-card.actions';


export const CurrentCardFeatureKey = 'currentCard';

export interface CurrentCardState {
  card?: Card;
  similarCards: Card[];
}

export const initialCurrentCardState: CurrentCardState = {
  card: undefined,
  similarCards: []
}

export const currentCardReducer = createReducer(
  initialCurrentCardState,
  on(changeCurrentCard, (state, action) => onChangeCurrentCard(state, action.card, action.similarCards)),
  on(fetchSimilarCards, (state, action) => onSimilarCardsFetch(state, action.similarCards))
)

export function onChangeCurrentCard(state: CurrentCardState, card: Card, similarCards: Card[]) {
  return { ...state, card: card, similarCards }
}

export function onSimilarCardsFetch(state: CurrentCardState, similarCards: Card[]) {
  return { ...state, similarCards }
}
