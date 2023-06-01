import axios, {AxiosResponse} from 'axios';
import {ResposeLogin, ResposeUtente} from '../model/response';
import {UtenteLogin, UtenteRegistrazione, UtenteLogout} from '../model/requestDTO'

// questa funzione viene usata quando si vuole autenticare un utente già registrato sul sito 
export const loginUser = (datiLogin: UtenteLogin) : Promise<AxiosResponse<ResposeLogin>> =>{
    return axios.post<ResposeLogin>('http://localhost:8080/utente/login',datiLogin);
}

// questa funzione è usata quando si vuole effetturare la registrazione di un utente nel db
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

//questa funzione è usata per effettuare il logout dell'utente dal sito
export const userLogOut = (requestUtenteLogOut: UtenteLogout) => {
    return axios.post('http://localhost:8080/utente/logout', requestUtenteLogOut,
        {
            headers:{
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            } 
        }
    )
}
