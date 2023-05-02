import { configureStore } from '@reduxjs/toolkit';
import {authenticationReducer} from '../store/authentication/authentication.reducer';

// questa funzione viene chiamata da index.tsx per creare lo store

// il reducer è il componente che gestisce lo stato dell'applicazione
export const store = configureStore({
  reducer: {
     // qui vanno inseriti tutti i reducer
    ...authenticationReducer,

  },
});

// questo tipo di ritorno è necessario per il tipo di ritorno di configureStore
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
