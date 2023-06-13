import { createReducer } from "@reduxjs/toolkit";
import {PaginaTipo, typeAttivitaState} from './types'
import {escursioniAction} from "../escursioni/escursioni.action"
import { actions } from "store/toast/toast.action";
import Item from "components/Item";

const startState: typeAttivitaState = {
    escursioni: [],
    error:false,
    page:PaginaTipo.HOMEPAGE
}

export const escursioniReducer = {
    escursioni: createReducer(startState, (builder) => {
       builder
            .addCase(escursioniAction.getAttivitaOrganizzate.pending, (state) =>{
                return{
                    ...state
                    
                }
            })
            .addCase(escursioniAction.getAttivitaOrganizzate.fulfilled, (state, action) => {
                const escursioni = action.payload.map((item) => {
                return {
                    ...state,
                    escursioni,
                    page: PaginaTipo.HOMEPAGE
                } 
             })


            })
            .addCase(escursioniAction.getAttivitaOrganizzate.rejected, (state) => {
                return {
                    ...state,
                    
                }
            })

    })
}
