import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {characterReducer} from './ngrx/reducer/character.reducer';
import * as CharacterEffect from './ngrx/effect/character.effect';
import {provideHttpClient} from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import * as authEffects from './ngrx/effect/auth.effects'
import {authReducer} from './ngrx/reducer/auth.reducer';
import {productReducer} from './ngrx/reducer/product.reducer';
import * as productEffects from './ngrx/effect/product.effect';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEffects(
      CharacterEffect,
      authEffects,
      productEffects,
    ),
    provideStore(
      {
        character: characterReducer,
        auth: authReducer,
        product: productReducer,
      }

    ),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(
      {
        projectId: "buoi11-46842",
        appId: "1:964632053755:web:571a9c22d38dfce16bed5e",
        storageBucket: "buoi11-46842.firebasestorage.app",
        apiKey: "AIzaSyDKT4hUOp8xoK8pbVV6kI0Yjdn-KabpMk8",
        authDomain: "buoi11-46842.firebaseapp.com",
        messagingSenderId: "964632053755",
        measurementId: "G-N3CE8EYWMB"
      })),
    provideAuth(() => getAuth())
  ]
};
