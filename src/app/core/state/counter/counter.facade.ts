import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter.actions';

@Injectable({providedIn: 'root'})
export class CounterFacade {

  count$: Observable<number> = this.store.select('count');

  constructor(private store: Store<{ count: number }>) {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
