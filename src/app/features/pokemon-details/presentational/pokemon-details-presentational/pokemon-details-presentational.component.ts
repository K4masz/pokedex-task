import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-details-presentational',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './pokemon-details-presentational.component.html',
  styleUrl: './pokemon-details-presentational.component.scss'
})
export class PokemonDetailsPresentationalComponent {
  @Input() data: unknown;
}
