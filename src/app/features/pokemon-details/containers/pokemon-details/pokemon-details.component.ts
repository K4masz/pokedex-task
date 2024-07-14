import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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
data$: unknown = this.http.get('https://api.pokemontcg.io/v2/cards/ecard2-H2')
}
