import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { authReducer } from "./authentication/authentication.reducer"
import {escursioniReducer} from "./escursioni/escursioni.reducer"
 
const store = configureStore({
    reducer: {
        ...authReducer,
        ...escursioniReducer

    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
