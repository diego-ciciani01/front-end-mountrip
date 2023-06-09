
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {UtenteLogin} from '../../model/requestDTO';
import { loginController } from "./authentication.controller"
import { toastActions } from '../toast/toast.action'
import { toastType } from "../toast/type";
import {loginUser, modifica_utente, userLogOut} from "../../callAPI/userAPI";
import { ResposeLogin, ResposeUtente } from 'model/response';
import {RequestUtenteModifica} from 'model/requestDTO';
import { UtenteLogout } from '../../model/requestDTO';
import {deleteToken} from '../../callAPI/utils'
// sono le azioni fatte per passare insereire nello store di redux le informazioni. 
// in seguito vengono caricate e fatte le chiamate API verso il BE 
const logUtente = createAsyncThunk(
    '/login',
    async (requestUtenteLogin: UtenteLogin, thunkAPI): Promise<ResposeLogin | undefined> => {
        if (!loginController(requestUtenteLogin)) {
            thunkAPI.dispatch(toastActions.show({message: 'Username o password mancanti', type: toastType.ERRORE_GENERICO}));
            console.log("username o password mancanti");
            return;
        }
        try {

            // vadi ad inserire nello storage l'utente e il tocken 
            const response = await loginUser(requestUtenteLogin);
            localStorage.setItem('token', response.data.tokenJWT);
            localStorage.setItem('user', JSON.stringify(response.data.utente));
            return response.data;

        } catch (e) {
            const error = e as AxiosError;
            thunkAPI.dispatch(toastActions.show({message: error.response?.data, type: toastType.ERRORE_GENERICO}));
            throw e;
        }
    }
)

const logoutUser = createAsyncThunk(
    '/logout',
    async (requestUtenteLogout: UtenteLogout, thunkAPI): Promise<void> => {
        try {
            await userLogOut(requestUtenteLogout);
            deleteToken();
        } catch (e) {
            const error = e as AxiosError;
            throw e;
        }
    }
)
const modificaUser = createAsyncThunk(
    '/modifica',
    async (requestUtenteModifica: RequestUtenteModifica, thunkAPI): Promise<ResposeUtente> => {
        try{
            const response = await modifica_utente(requestUtenteModifica);
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data;
        }catch(e){
            const error = e as AxiosError;
            throw e;
        }
    }

)

export const authAction = {
    logUtente,
    logoutUser,
    modificaUser
}

