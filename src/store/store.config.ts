import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { authenticationReducer } from "./authentication/authentication.reducer"

 
const store = configureStore({
    reducer: {
        ...authenticationReducer

    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
