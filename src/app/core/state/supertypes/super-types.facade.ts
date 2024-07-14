import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadSuperTypes } from './super-types.actions';
import { SuperTypesState } from './super-types.reducer';
import { selectSuperTypes } from './super-types.selectors';

@Injectable({ providedIn: 'root' })
export class SuperTypesFacade {

  superTypes$: Observable<string[]> = this.store.select(selectSuperTypes);

  constructor(private store: Store<SuperTypesState>) {
  }

  loadSuperTypes() {
    this.store.dispatch(loadSuperTypes())
  }
}
