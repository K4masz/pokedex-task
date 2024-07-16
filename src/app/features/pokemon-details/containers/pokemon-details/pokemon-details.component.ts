import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { filter, Observable, OperatorFunction, tap } from 'rxjs';
import { Card } from '../../../../core/models/model';
import { CardsFacade } from '../../../../core/state/cards/cards.facade';
import { CurrentCardFacade } from '../../../../core/state/current-card/current-card.facade';
import { SubTypesFacade } from '../../../../core/state/subtypes/sub-types.facade';
import { SuperTypesFacade } from '../../../../core/state/supertypes/super-types.facade';
import { TypesFacade } from '../../../../core/state/types/types.facade';
import { PokemonDetailsPresentationalComponent } from "../../presentational/pokemon-details-presentational/pokemon-details-presentational.component";

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [PokemonDetailsPresentationalComponent, CommonModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {
  typesFacade = inject(TypesFacade);
  superTypesFacade = inject(SuperTypesFacade);
  subTypesFacade = inject(SubTypesFacade);

  cardsFacade = inject(CardsFacade);
  currentCardFacade = inject(CurrentCardFacade)

  drawer = inject(forwardRef(() => MatDrawer))

  types$: Observable<string[]> = this.typesFacade.types$;
  superTypes$: Observable<string[]> = this.superTypesFacade.superTypes$;
  subTypes$: Observable<string[]> = this.subTypesFacade.subTypes$;

  currentCard$: Observable<Card> = this.currentCardFacade.currentCard$.pipe(
    filter(value => !!value) as OperatorFunction<Card | undefined, Card>,
    tap(() => this.drawer.open())
  );
  similarCards$: Observable<Card[]> = this.currentCardFacade.similarCards$.pipe(
    filter(value => !!value) as OperatorFunction<Card[] | undefined, Card[]>
  );

  onCardUpdate(updatedCard: Card){
    console.log(updatedCard)
    // this.currentCardFacade.updateCard(updatedCard);
  }

  onPokemonDetailsClose() {
    this.drawer.close();
  }
}
