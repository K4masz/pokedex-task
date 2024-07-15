import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription, withLatestFrom } from 'rxjs';

import { FilterValues } from '../../../features/pokemons-list/presentational/filters/filters.component';
import { Card } from '../../models/model';
import { changeFilters, changePage, loadCardsPage } from './cards.actions';
import { CardsState } from './cards.reducer';
import { selectCards, selectCurrentCardsPage, selectCurrentPage, selectCurrentPageAsDatasource, selectFiltersValues } from './cards.selectors';

@Injectable({ providedIn: 'root' })
export class CardsFacade {
  store = inject(Store<CardsState>)

  cards$: Observable<Card[]> = this.store.select(selectCards);
  currentPageNumber$: Observable<number> = this.store.select(selectCurrentPage);
  currentCardsPage$: Observable<Card[]> = this.store.select(selectCurrentCardsPage);
  selectCurrentPageAsDatasource$ = this.store.select(selectCurrentPageAsDatasource);
  filtersValues$: Observable<FilterValues> = this.store.select(selectFiltersValues);

  //TODO: find other solution
  pageChangeCardsLoadSubscription: Subscription = combineLatest([this.currentPageNumber$, this.filtersValues$]).pipe(withLatestFrom(this.currentCardsPage$))
    .subscribe(([[currentPageNumber, filterValues], currentCardsPage]: [[number, FilterValues], Card[]]) => {
      if (!currentCardsPage)
        this.store.dispatch(loadCardsPage({ page: currentPageNumber,  filters: filterValues  }))
    })

  //TODO: find other solution
  filtersChangeCardsLoadSubscription: Subscription = this.filtersValues$
    .subscribe(filters => (this.store.dispatch(loadCardsPage({ page: 1, filters })))
  )


  loadCardsPage(page: number = 1, filters?: FilterValues) {
    this.store.dispatch(loadCardsPage({ page, filters }))
  }

  changePage(newPage: number) {
    this.store.dispatch(changePage({ newPage }));
  }

  changeFilters(filters: FilterValues) {
    this.store.dispatch(changeFilters({ filters }))
  }


}
