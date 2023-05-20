import {UtenteLogin} from '../../model/requestDTO'

export const loginController=(credenziali:UtenteLogin) => {
    var status = true;
    if(credenziali.username == '' || credenziali.password== ''){
        status = false;
    }
    return status;
}