import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterFacade } from './core/state/counter/counter.facade';
import { SuperTypesFacade } from './core/state/supertypes/super-types.facade';
import { TypesFacade } from './core/state/types/types.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  count$ = this.counterFacade.count$;

  constructor(
    private counterFacade: CounterFacade,
    private typesFacade: TypesFacade,
    private superTypesFacade: SuperTypesFacade,
    private subTypesFacade: SubTypesFacade
  ) {

  }

  ngOnInit(): void {
    this.typesFacade.loadTypes();
    this.superTypesFacade.loadSuperTypes();
    this.subTypesFacade.loadSubTypes();
  }

  increment() {
    this.counterFacade.increment();
  }

  decrement() {
    this.counterFacade.decrement();
  }

  reset() {
    this.counterFacade.reset();
  }
}
