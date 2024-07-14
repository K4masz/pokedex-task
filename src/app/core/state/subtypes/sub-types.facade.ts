import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadSubTypes } from './sub-types.actions';
import { SubTypesState } from './sub-types.reducer';
import { selectSubTypes } from './sub-types.selectors';

@Injectable({ providedIn: 'root' })
export class SubTypesFacade {

  subTypes$: Observable<string[]> = this.store.select(selectSubTypes);

  constructor(private store: Store<SubTypesState>) {
  }

  loadSubTypes() {
    this.store.dispatch(loadSubTypes())
  }
}
