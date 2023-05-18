import axios, { AxiosResponse } from "axios"
import {ResposeAttivita} from "../model/response"

export const listaEscursioni = (tipo:number): Promise<AxiosResponse<ResposeAttivita []>> => {
    return axios.post<ResposeAttivita[]>('http://localhost:8080/attivita/lista', {tipo},
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}