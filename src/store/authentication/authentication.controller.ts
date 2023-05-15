import {UtenteLogin} from '../../model/requestDTO'

export const loginController=(credenziali:UtenteLogin) => {
    var status = true;

    if(credenziali.username == null || credenziali.password== null){
        status = false;
    }
    return status;
}