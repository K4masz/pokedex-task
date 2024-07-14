import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';
import { effects, metaReducers, reducers } from './core/state/index';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore(reducers, {metaReducers}),
    provideEffects(effects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    })]
};
