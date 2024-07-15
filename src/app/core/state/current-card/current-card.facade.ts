import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Card } from '../../models/model';

import { changeCurrentCard } from './current-card.actions';
import { CurrentCardState } from './current-card.reducer';
import { selectCurrentCard, selectSimilarCards } from './current-card.selectors';

@Injectable({ providedIn: 'root' })
export class CurrentCardFacade {
  store = inject(Store<CurrentCardState>)

  currentCard$: Observable<Card | undefined> = this.store.select(selectCurrentCard);
  similarCards$: Observable<Card[]> = this.store.select(selectSimilarCards)

  changeCurrentCard(card: Card){
    this.store.dispatch(changeCurrentCard({card, similarCards:[]}))
  }
}
