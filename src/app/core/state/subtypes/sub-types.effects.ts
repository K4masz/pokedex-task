import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { SubTypeActionTypes } from './sub-types.actions';

@Injectable({ providedIn: 'root' })
export class SubTypesEffects {

  loadSubTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubTypeActionTypes.LOAD_SUB_TYPES),
      mergeMap(() => this.http.get<{data: string[]}>('https://api.pokemontcg.io/v2/subtypes/')
        .pipe(
          map((response: {data:string[]}) => ({ type: SubTypeActionTypes.SUB_TYPES_LOADED_SUCCESS, subTypes: response.data })),
          catchError((err) => of({type: SubTypeActionTypes.SUB_TYPES_LOADED_ERROR, error: err}))
        )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) { }

}
