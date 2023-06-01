import { createAsyncThunk } from "@reduxjs/toolkit";
import {ResposeAttivita, ResposeAccettata} from '../../model/response';
import { listaEscursioni, aggiungi, accetta } from "callAPI/escursioniAPI";
import { Axios, AxiosError } from "axios";
import {ResquestEscursioneIserimento, AccettaAttivita} from '../../model/requestDTO'

// quando l'untente o l'associazione vuole visualizzare l'home page 
const getAttivitaOrganizzate = createAsyncThunk(
    '/getListEscursioni',
    async(_, thunkAPI):Promise <ResposeAttivita[]>=>{
        try{
            const response = await listaEscursioni(1);
            return response.data;
        }catch(e){
            const error = e as AxiosError;
            throw e;
        }   
    }
);

const getAttivitaPubbliche = createAsyncThunk(
    '/getListEscursioniPubblic',
    async(_, thunkAPI):Promise <ResposeAttivita[]>=>{
        try{
            const response = await listaEscursioni(2);
            return response.data;
        }catch(e){
            const error = e as AxiosError;
            throw e;
        }   
    }
);


// questa azione viene fatta quando l'utente vuole creare un'escursione
const creaAttività = createAsyncThunk(
    '/creaEscursione',
    async(escursione  :ResquestEscursioneIserimento, thunkAPI):Promise <ResposeAttivita> => {
        try{
            const response = await aggiungi(escursione)
            return response.data;
        }catch (e){
            const error = e as AxiosError;
            throw e;
        }
    }
);

// questa azione viene fatta quando l'utente vuole partecipare ad una escursione 
const partecipaAttivita = createAsyncThunk(
    '/accettaEscursione',
    async(utenteToken:AccettaAttivita, thunkAPI): Promise <ResposeAccettata> => {
        try{
            const response = await accetta(utenteToken)
            return response.data;
        }catch(e){
            const error = e as AxiosError;
            throw e;
        }
    }
)


///AGGIUNGI LE ALTRE AZIONI DA COMPIERE 

export const escursioniAction={
    getAttivitaOrganizzate,
    creaAttività,
    partecipaAttivita
}