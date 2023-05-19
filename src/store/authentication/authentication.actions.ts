
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {UtenteLogin} from '../../model/requestDTO';
import { loginController } from "./authentication.controller"
import { toastActions } from '../toast/toast.action'
import { toastType } from "../toast/type";
import {loginUser} from "../../callAPI/userAPI";
import { ResponeLogin } from 'model/response';

// sono le azioni fatte per passare insereire nello store di redux le informazioni. 
// in seguito vengono caricate e fatte le chiamate API verso il BE 
const logUtente = createAsyncThunk(
    '/login',
    async (requestUtenteLogin: UtenteLogin, thunkAPI): Promise<ResponeLogin | undefined> => {
        if (!loginController(requestUtenteLogin)) {
            thunkAPI.dispatch(toastActions.show({message: 'Username o password mancanti', type: toastType.ERRORE_GENERICO}));
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


export const authAction = {
    logUtente
}

