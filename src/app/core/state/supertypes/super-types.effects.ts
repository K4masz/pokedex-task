import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { SuperTypeActionTypes } from './super-types.actions';

@Injectable({ providedIn: 'root' })
export class SuperTypesEffects {

  loadSuperTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SuperTypeActionTypes.LOAD_SUPER_TYPES),
      mergeMap(() => this.http.get<{data: string[]}>('https://api.pokemontcg.io/v2/supertypes/')
        .pipe(
          map((response: {data:string[]}) => ({ type: SuperTypeActionTypes.SUPER_TYPES_LOADED_SUCCESS, superTypes: response.data })),
          catchError((err) => of({type: SuperTypeActionTypes.SUPER_TYPES_LOADED_ERROR, error: err}))
        )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) { }

}
