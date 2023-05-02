
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {UtenteLogin} from '../../model/requestDTO';
import { loginController } from "./authentication.controller"
import { toastActions } from '../toast/toast.action'
import { toastType } from "../toast/type";

// queste sono action usate dallo store di authentication
// questa funzione è chiamata quando si vuole fare il login e richiama il servizio di login del be
const loginUser = createAsyncThunk(
    '/login',
    async (requestUtenteLogin: UtenteLogin, thunkAPI): Promise<UtenteLogin | undefined> => {
        if (!loginController(requestUtenteLogin)) {
            thunkAPI.dispatch(toastActions.show({message: 'Username o password mancanti', type: toastType.ERRORE_GENERICO}));
            return;
        }
        // try {
        //     const response = await utente_login(requestUtenteLogin);
        //     localStorage.setItem('token', response.data.jwtToken);
        //     localStorage.setItem('user', JSON.stringify(response.data.utente));
        //     return response.data;

        // } catch (e) {
        //     const error = e as AxiosError;
        //     thunkAPI.dispatch(toastActions.showToast({message: error.response?.data, type: ToastType.ERROR}));
        //     throw e;
        // }
    }
)


export const authAction = {
    loginUser
}
