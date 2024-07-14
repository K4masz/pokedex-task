import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTypes } from './types.actions';
import { TypesState } from './types.reducer';
import { selectTypes } from './types.selectors';

@Injectable({ providedIn: 'root' })
export class TypesFacade {

  types$: Observable<string[]> = this.store.select(selectTypes);

  constructor(private store: Store<TypesState>) {
  }

  loadTypes() {
    this.store.dispatch(loadTypes())
  }
}
