import { createReducer, on } from '@ngrx/store';
import { Card } from '../../models/model';
import { cardsLoadedSuccess, cardsLoadError, loadCards } from './cards.actions';



export const CardsFeatureKey = 'cards';

export interface CardsState {
  cards: Card[];
  error?: string;
}

export const initialCardsState: CardsState = {
  cards: [],
};

export const cardsReducer = createReducer(
  initialCardsState,
  on(loadCards, state => onLoadCards(state)),
  on(cardsLoadedSuccess, (state, action) => onCardsLoadedSuccess(state, action.cards)),
  on(cardsLoadError, (state, action) => onCardsLoadError(state, action.error))
)

export function onLoadCards(state: CardsState) {
  return { ...state }
}

export function onCardsLoadedSuccess(state: CardsState, cards: Card[]) {
  return { ...state, cards }
}

export function onCardsLoadError(state: CardsState, error: string) {
  return { ...state, error }
}
