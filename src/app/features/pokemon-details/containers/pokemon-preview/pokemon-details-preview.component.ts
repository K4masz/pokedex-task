import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDrawer } from '@angular/material/sidenav';
import { filter, Observable, tap } from 'rxjs';
import { CurrentCardFacade } from '../../../../core/state/current-card/current-card.facade';
import { SubTypesFacade } from '../../../../core/state/subtypes/sub-types.facade';
import { SuperTypesFacade } from '../../../../core/state/supertypes/super-types.facade';
import { TypesFacade } from '../../../../core/state/types/types.facade';
import { PokemonDetailsPresentationalComponent } from '../../presentational/pokemon-details-presentational/pokemon-details-presentational.component';

@Component({
  selector: 'app-pokemon-preview',
  standalone: true,
  imports: [PokemonDetailsPresentationalComponent, CommonModule],
  templateUrl: './pokemon-details-preview.component.html',
  styleUrl: './pokemon-details-preview.component.scss'
})
export class PokemonPreviewComponent {
  types$: Observable<string[]> = inject(TypesFacade).types$;
  superTypes$: Observable<string[]> = inject(SuperTypesFacade).superTypes$;
  subTypes$: Observable<string[]> = inject(SubTypesFacade).subTypes$;

  drawer = inject(forwardRef(() => MatDrawer))
  drawerClosingSubscription = this.drawer.closedStart.pipe(takeUntilDestroyed()).subscribe(() => console.log('left drawer close'))

  similarCard$ = inject(CurrentCardFacade).currentCard$.pipe(
    filter(value => !!value),
    tap(()=> this.drawer.open())
  );

  onPokemonDetailsClose() {
    this.drawer.close();
  }
}
