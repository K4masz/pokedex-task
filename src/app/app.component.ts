import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { PokemonDetailsComponent } from "./features/pokemon-details/containers/pokemon-details/pokemon-details.component";
import { PokemonListComponent } from "./features/pokemons-list/containers/pokemon-list/pokemon-list.component";


import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { CardsFacade } from './core/state/cards/cards.facade';
import { SubTypesFacade } from './core/state/subtypes/sub-types.facade';
import { SuperTypesFacade } from './core/state/supertypes/super-types.facade';
import { TypesFacade } from './core/state/types/types.facade';
import { PokemonPreviewComponent } from './features/pokemon-details/containers/pokemon-preview/pokemon-details-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PokemonListComponent, MatCardModule, MatSidenavModule, MatDivider, PokemonDetailsComponent, PokemonPreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private typesFacade: TypesFacade,
    private superTypesFacade: SuperTypesFacade,
    private subTypesFacade: SubTypesFacade,
    private cardsFacade: CardsFacade
  ) {

  }

  ngOnInit(): void {
    this.cardsFacade.loadCardsPage();
    this.typesFacade.loadTypes();
    this.superTypesFacade.loadSuperTypes();
    this.subTypesFacade.loadSubTypes();
  }
}
