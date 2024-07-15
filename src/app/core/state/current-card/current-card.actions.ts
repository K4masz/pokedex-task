import { createAction, props } from '@ngrx/store';
import { Card } from '../../models/model';

export enum CurrentCardActionTypes{
  CHANGE_CURRENT_CARD = '[Current Card] Change Current Card',
  FETCH_SIMILAR_CARDS = '[Current Card] Fetch Similar Cards'
}

export const changeCurrentCard = createAction(CurrentCardActionTypes.CHANGE_CURRENT_CARD, props<{card: Card, similarCards: Card[]}>());
export const fetchSimilarCards = createAction(CurrentCardActionTypes.FETCH_SIMILAR_CARDS, props<{similarCards: Card[]}>());
