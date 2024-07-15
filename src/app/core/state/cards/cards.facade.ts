import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, withLatestFrom } from 'rxjs';

import { FilterValues } from '../../../features/pokemons-list/presentational/filters/filters.component';
import { Card } from '../../models/model';
import { changePage, loadCardsPage } from './cards.actions';
import { CardsState } from './cards.reducer';
import { selectCards, selectCurrentCardsPage, selectCurrentPage, selectCurrentPageAsDatasource } from './cards.selectors';

@Injectable({ providedIn: 'root' })
export class CardsFacade {
  store = inject(Store<CardsState>)

  cards$: Observable<Card[]> = this.store.select(selectCards);
  currentPageNumber$: Observable<number> = this.store.select(selectCurrentPage);
  currentCardsPage$: Observable<Card[]> = this.store.select(selectCurrentCardsPage);
  selectCurrentPageAsDatasource$ = this.store.select(selectCurrentPageAsDatasource);

  cardsPageLoadingSubscription = this.currentPageNumber$.pipe(withLatestFrom(this.currentCardsPage$))
    .subscribe(([currentPageNumber, currentCardsPage]: [number, Card[]]) => {
      if (!currentCardsPage)
        this.store.dispatch(loadCardsPage({ page: currentPageNumber }))
    })


  loadCardsPage(page: number = 1, filters?: FilterValues) {
    this.store.dispatch(loadCardsPage({ page, filters }))
  }

  changePage(newPage: number) {
    this.store.dispatch(changePage({ newPage }));
  }
}
