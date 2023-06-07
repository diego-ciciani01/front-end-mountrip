import { createReducer } from "@reduxjs/toolkit";
import {typeAttivitaState} from "store/escursioni/types"
import {PaginaTipo} from './types'

export const startState:typeAttivitaState = {
    resposeAttivita: [],
    error:false,
    page:PaginaTipo.HOMEPAGE
}

export const escursioniReducer = {
    escursioni: createReducer(startState, (builder) => {
       
    })
}
