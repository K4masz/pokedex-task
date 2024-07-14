import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TypeActionTypes } from './types.actions';

@Injectable({ providedIn: 'root' })
export class TypeEffects {

  loadTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TypeActionTypes.LOAD_TYPES),
      mergeMap(() => this.http.get<{data: string[]}>('https://api.pokemontcg.io/v2/types/')
        .pipe(
          map((response: {data:string[]}) => ({ type: TypeActionTypes.TYPES_LOADED_SUCCESS, types: response.data })),
          catchError((err) => of({type: TypeActionTypes.TYPES_LOADED_ERROR, error: err}))
        )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) { }

}
