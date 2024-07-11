import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterFacade } from './core/state/counter/counter.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  count$ = this.counterFacade.count$;

  constructor(private counterFacade: CounterFacade){

  }

  increment(){
    this.counterFacade.increment();
  }

  decrement() {
    this.counterFacade.decrement();
  }

  reset() {
    this.counterFacade.reset();
  }
}
