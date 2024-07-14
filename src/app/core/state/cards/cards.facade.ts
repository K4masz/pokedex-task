import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Card } from '../../models/model';
import { loadCards } from './cards.actions';
import { CardsState } from './cards.reducer';
import { selectCards } from './cards.selectors';

@Injectable({ providedIn: 'root' })
export class CardsFacade {

  cards$: Observable<Card[]> = this.store.select(selectCards);

  constructor(private store: Store<CardsState>) {
  }

  loadCards() {
    this.store.dispatch(loadCards())
  }
}
