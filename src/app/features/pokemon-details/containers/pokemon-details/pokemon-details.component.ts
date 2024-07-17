import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
  types$: Observable<string[]> = inject(TypesFacade).types$;
  superTypes$: Observable<string[]> = inject(SuperTypesFacade).superTypes$;
  subTypes$: Observable<string[]> = inject(SubTypesFacade).subTypes$;

  cardsFacade = inject(CardsFacade);
  currentCardFacade = inject(CurrentCardFacade)

  drawer = inject(forwardRef(() => MatDrawer))
  drawerClosingSubscription = this.drawer.closedStart.pipe(takeUntilDestroyed()).subscribe(() => this.cardsFacade.resetIndex())

  currentCard$: Observable<Card> = this.cardsFacade.currentCard$.pipe(
    filter(value => !!value) as OperatorFunction<Card | null, Card>,
    tap(() => this.drawer.open())
  );
  similarCards$: Observable<Card[]> = this.currentCardFacade.similarCards$.pipe(
    filter(value => !!value) as OperatorFunction<Card[] | undefined, Card[]>
  );

  onCardUpdate(updatedCard: Card) {
    this.cardsFacade.updateIndex(updatedCard);
  }

  onPokemonDetailsClose() {
    this.drawer.close();
  }

  onRowClick([index, card] : [number, Card]){
    this.currentCardFacade.changeCurrentCard(card);
  }
}
