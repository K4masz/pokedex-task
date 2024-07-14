import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Card } from '../../../../core/models/model';
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
  http = inject(HttpClient);

  typesFacade = inject(TypesFacade);
  superTypesFacade = inject(SuperTypesFacade);
  subTypesFacade = inject(SubTypesFacade);

  types$: Observable<string[]> = this.typesFacade.types$;
  superTypes$: Observable<string[]> = this.superTypesFacade.superTypes$;
  subTypes$: Observable<string[]> = this.subTypesFacade.subTypes$;

  data$: Observable<Card> = this.http.get<{data: Card}>('https://api.pokemontcg.io/v2/cards/ecard2-H2').pipe(map((x => x.data)))
}
