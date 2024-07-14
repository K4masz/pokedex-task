import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../models/model';
import { PokemonCatalogResponse, SearchParams, SubType, SuperType, Type } from '../../models/util-types';


@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogApiService {
  private http = inject(HttpClient);

  private readonly API_VERSION: string = 'v2'
  private readonly API_URL: string = `https://api.pokemontcg.io/${this.API_VERSION}`;

  getCards(): Observable<PokemonCatalogResponse<Card>>{
    return this.http.get<PokemonCatalogResponse<Card>>(this.API_URL + '/cards');
  }

  getCard(id: string): Observable<PokemonCatalogResponse<{data:Card}>>{
    return this.http.get<PokemonCatalogResponse<{data: Card}>>(this.API_URL + '/cards' + '/' + `${id}`);
  }

  searchCards(searchParams: SearchParams):Observable<PokemonCatalogResponse<Card>>{
    return this.http.get<PokemonCatalogResponse<Card>>(this.API_URL + '/cards', );
  }

  // --- TYPES ---

  getTypes(): Observable<PokemonCatalogResponse<Type>> { return this.http.get<PokemonCatalogResponse<Type>>(this.API_URL + '/types'); }

  getSubTypes(): Observable<PokemonCatalogResponse<SubType>> { return this.http.get<PokemonCatalogResponse<SubType>>(this.API_URL + '/subtypes') }

  getSuperTypes(): Observable<PokemonCatalogResponse<SuperType>> { return this.http.get<PokemonCatalogResponse<SuperType>>(this.API_URL + '/supertypes') }
}
