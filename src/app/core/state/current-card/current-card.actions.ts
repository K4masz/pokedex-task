import { createAction, props } from '@ngrx/store';
import { Card } from '../../models/model';

export enum CurrentCardActionTypes {
  CHANGE_CURRENT_CARD = '[Current Card] Change Current Card',

  FETCH_SIMILAR_CARDS = '[Current Card] Fetch Similar Cards',
  FETCH_SIMILAR_CARDS_SUCCESS = '[PokemonCTG API] Fetch Similar Cards Success',
  FETCH_SIMILAR_CARDS_ERROR = '[PokemonCTG API] Fetch Similar Cards Error'
}

export const changeCurrentCard = createAction(CurrentCardActionTypes.CHANGE_CURRENT_CARD, props<{ card: Card }>());

export const fetchSimilarCards = createAction(CurrentCardActionTypes.FETCH_SIMILAR_CARDS, props<{ card: Card }>());
export const fetchSimilarCardsSuccess = createAction(CurrentCardActionTypes.FETCH_SIMILAR_CARDS_SUCCESS, props<{ similarCards: Card[] }>());
export const fetchSimilarCardsError = createAction(CurrentCardActionTypes.FETCH_SIMILAR_CARDS, props<{ error: string }>());

