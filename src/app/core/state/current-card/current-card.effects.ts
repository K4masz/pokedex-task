import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { mergeMap, of } from 'rxjs';
import { Card } from '../../models/model';
import { CardsState } from '../cards/cards.reducer';
import { selectAllCards } from '../cards/cards.selectors';
import { CurrentCardActionTypes } from './current-card.actions';
import { CurrentCardState } from './current-card.reducer';

@Injectable({ providedIn: 'root' })
export class CurrentCardEffects {
  actions$ = inject(Actions);
  currentCardStore$ = inject(Store<CurrentCardState>);
  cardsStore$ = inject(Store<CardsState>)

  //TODO: rename
  similarCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrentCardActionTypes.CHANGE_CURRENT_CARD),
      concatLatestFrom(() => this.cardsStore$.select(selectAllCards)),
      mergeMap(([action, allCards]) => {
        const artist = action.card.artist;
        const id = action.card.id;
        const similarCards = allCards.filter((card:Card) => card.artist === artist && card.id !== id);
        return of({ type: CurrentCardActionTypes.FETCH_SIMILAR_CARDS, similarCards })
      })
    )
  );
}
