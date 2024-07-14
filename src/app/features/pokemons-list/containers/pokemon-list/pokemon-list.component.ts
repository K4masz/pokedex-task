import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable, of } from 'rxjs';
import { FiltersComponent } from "../../presentational/filters/filters.component";
import { PokemonListPrestentationalComponent } from "../../presentational/pokemon-list-prestentational/pokemon-list-prestentational.component";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonListPrestentationalComponent, CommonModule, FiltersComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  http = inject(HttpClient)

  dataSource$ = this.http.get('https://api.pokemontcg.io/v2/cards?pageSize=10&page=1');
  types$: Observable<string[]> = of(['type1', 'type2']);
  superTypes$: Observable<string[]> = of(['superType1', 'superType2']);
  subTypes$: Observable<string[]> = of(['subType1', 'subType2']);

  onPageChange(event: PageEvent){
    this.dataSource$ = this.http.get(`https://api.pokemontcg.io/v2/cards?pageSize=10&page=${event.pageIndex}`)
  }
}
