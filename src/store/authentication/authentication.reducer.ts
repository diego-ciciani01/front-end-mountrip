import { createReducer } from "@reduxjs/toolkit"
import { authAction } from "./authentication.actions"
import { typeAutenticationState} from "store/authentication/types"
import { actions } from "store/toast/toast.action"

export const startState:typeAutenticationState = {
    responseLogin: undefined,
    error: false
    
}

export const authReducer = {
    auth: createReducer(startState, (builder) => {
        builder
            .addCase(authAction.logUtente.pending, (state) =>{
                return {
                    ...state,
                    error: false
                }
        })
            .addCase(authAction.logUtente.rejected, (state) =>{
                return {
                    ...state,
                    error: true
                }
            })

            .addCase(authAction.logUtente.fulfilled, (state, action) => {

                return {
                    ...state, 
                    responseLogin:action.payload,
                    error: false
                }
            })


    })
}
