import { createReducer, on } from '@ngrx/store';
import { Card } from '../../models/model';
import { fetchSimilarCardsError, fetchSimilarCardsSuccess } from './current-card.actions';


export const CurrentCardFeatureKey = 'currentCard';

export interface CurrentCardState {
  similarCards: Card[];
  card?: Card;
}

export const initialCurrentCardState: CurrentCardState = {
  card: undefined,
  similarCards: []
}

export const currentCardReducer = createReducer(
  initialCurrentCardState,

  // on(changeCurrentCard, (state, action) => onChangeCurrentCard(state, action.card)),

  on(fetchSimilarCardsSuccess, (state, action) => onSimilarCardsFetchSuccess(state, action.similarCards)),
  on(fetchSimilarCardsError, (state, action) => onFetchSimilarCardsError(state, action.error))
)

export function onChangeCurrentCard(state: CurrentCardState, card: Card) {
  return { ...state, card: card }
}

export function onSimilarCardsFetchSuccess(state: CurrentCardState, similarCards: Card[]) {
  return { ...state, similarCards }
}

export function onFetchSimilarCardsError(state: CurrentCardState, error: string) {
  return { ...state, error }
}
