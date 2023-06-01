import axios, { AxiosResponse } from "axios"
import {ResposeAttivita, ResposeAccettata} from "../model/response"
import {ResquestEscursioneIserimento,  AccettaAttivita} from '../model/requestDTO'
 
export const listaEscursioni = (tipo:number): Promise<AxiosResponse<ResposeAttivita []>> => {
    return axios.post<ResposeAttivita[]>('http://localhost:8080/attivita/lista', {tipo},
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const aggiungi = (resquestEscursioneIserimento :ResquestEscursioneIserimento) : Promise <AxiosResponse<ResposeAttivita>> => {
    return axios.post<ResposeAttivita>('http://localhost:8080/escursione/inserisci', resquestEscursioneIserimento,
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const accetta = (token :AccettaAttivita) : Promise <AxiosResponse<ResposeAccettata>> => {
    return axios.post<ResposeAccettata>('http://localhost:8080/escursione/accetta', token,
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}



