import { createAsyncThunk } from "@reduxjs/toolkit";
import {ResposeAttivita} from '../../model/response';
import { listaEscursioni } from "callAPI/escursioniAPI";
import { Axios, AxiosError } from "axios";


const getListEscursioni = createAsyncThunk(
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


export const escursioniAction={
    getListEscursioni
}