import { createAction, props } from '@ngrx/store';
import { Card } from '../../models/model';

export enum CardsActionTypes{
  LOAD_CARDS = '[Types] Load Cards',

  CARDS_LOADED_SUCCESS = '[PokemonCTG API] Cards Loaded Successfully',
  CARDS_LOADED_ERROR = '[PokemonCTG API] Cards Load Error'
}

export const loadCards = createAction(CardsActionTypes.LOAD_CARDS);

export const cardsLoadedSuccess = createAction(CardsActionTypes.CARDS_LOADED_SUCCESS, props<{cards: Card[]}>());
export const cardsLoadError = createAction(CardsActionTypes.CARDS_LOADED_ERROR, props<{error: string}>());
