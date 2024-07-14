import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_VERSION: string = 'v2'
const API_URL: string = `https://api.pokemontcg.io/${API_VERSION}`;
@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogApiService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<PokemonCatalogResponse<unknown>>{
    return this.http.get<PokemonCatalogResponse<unknown>>(API_URL + '/cards');
  }

  getCard(id: string): Observable<PokemonCatalogResponse<unknown>>{
    return this.http.get<PokemonCatalogResponse<unknown>>(API_URL + '/cards' + `/${id}`);
  }

  searchCards(searchParams: SearchParams):Observable<PokemonCatalogResponse<unknown>>{
    return this.http.get<PokemonCatalogResponse<unknown>>(API_URL + '/cards', );
  }

  // --- TYPES ---

  getTypes(): Observable<PokemonCatalogResponse<Type>> { return this.http.get<PokemonCatalogResponse<Type>>(API_URL + '/types'); }

  getSubTypes(): Observable<PokemonCatalogResponse<SubType>> { return this.http.get<PokemonCatalogResponse<SubType>>(API_URL + '/subtypes') }

  getSuperTypes(): Observable<PokemonCatalogResponse<SuperType>> { return this.http.get<PokemonCatalogResponse<SuperType>>(API_URL + '/supertypes') }
}


type SuperType = string
type SubType = string
type Type = string;

interface PokemonCatalogResponse<T> {
  data: T[];
  page?: number;
  pageSize?: number;
  count?: number;
  totalCount?: number;
  select?: string;
}

interface SearchParams{
  q?: string;
  page?: number;
  pageSize?: number;
  orderBy: string;
}
