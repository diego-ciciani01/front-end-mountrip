import axios, {AxiosResponse} from 'axios';
import {ResponeLogin, ResponseUtente} from '../model/response';
import {UtenteLogin, UtenteRegistrazione} from '../model/requestDTO'

export const loginUser = (datiLogin: UtenteLogin) : Promise<AxiosResponse<ResponeLogin>> =>{
    return axios.post<ResponeLogin>('http://localhost:8080/login',datiLogin);
}

export const registraUser = (datiRegistrazione: UtenteRegistrazione):Promise<AxiosResponse<ResponseUtente>> => {
    return axios.post('http://localhost:8080/registrazione', datiRegistrazione, 
        {
            headers:{
                //header necessario per comunicare con jvt 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '
            }
        }
    );
}