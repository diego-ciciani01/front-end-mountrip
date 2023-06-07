import { configureStore } from '@reduxjs/toolkit';
import {authReducer} from '../store/authentication/authentication.reducer';
import {escursioniReducer} from '../store/escursioni/escursioni.reducer'
// questa funzione viene chiamata da index.tsx per creare lo store

// il reducer è il componente che gestisce lo stato dell'applicazione
export const store = configureStore({
  reducer: {
     // qui vanno inseriti tutti i reducer
    ...authReducer,
    ...escursioniReducer
  },
});

// questo tipo di ritorno è necessario per il tipo di ritorno di configureStore
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
