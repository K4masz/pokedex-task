import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-pokemon-details-presentational',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './pokemon-details-presentational.component.html',
  styleUrl: './pokemon-details-presentational.component.scss'
})
export class PokemonDetailsPresentationalComponent {
  @Input() data!: any | null;
}
