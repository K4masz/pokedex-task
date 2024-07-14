export type SuperType = string
export type SubType = string
export type Type = string;

export interface PokemonCatalogResponse<T> {
  data: T[];
  page?: number;
  pageSize?: number;
  count?: number;
  totalCount?: number;
  select?: string;
}

export interface SearchParams{
  q?: string;
  page?: number;
  pageSize?: number;
  orderBy: string;
}
