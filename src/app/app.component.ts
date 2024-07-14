import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { PokemonDetailsComponent } from "./features/pokemon-details/containers/pokemon-details/pokemon-details.component";
import { PokemonListComponent } from "./features/pokemons-list/containers/pokemon-list/pokemon-list.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonListComponent, MatCardModule, MatSidenavModule, MatDivider, PokemonDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
