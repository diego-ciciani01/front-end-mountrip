import axios, {AxiosResponse} from 'axios';
import {ResposeLogin, ResposeUtente} from '../model/response';
import {UtenteLogin, UtenteRegistrazione} from '../model/requestDTO'

export const loginUser = (datiLogin: UtenteLogin) : Promise<AxiosResponse<ResposeLogin>> =>{
    return axios.post<ResposeLogin>('http://localhost:8080/utente/login',datiLogin);
}

export const registraUser = (datiRegistrazione: UtenteRegistrazione)
:Promise<AxiosResponse<ResposeUtente>> => {
    console.log('ciao sono qui', datiRegistrazione);
    return axios.post('http://localhost:8080/utente/registrazione', datiRegistrazione,     
    {
            headers:{
                //header necessario per comunicare con jvt 
                'Content-Type': 'application/json'
            }
        }
    );
}