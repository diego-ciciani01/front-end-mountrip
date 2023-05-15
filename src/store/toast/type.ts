import React from "react";
import {ToastPosition} from 'react-toastify';


export interface  stateToast{
    show: boolean;
    message: string;
    type: toastType;
    options?: toastOptions;

}

export const enum toastType {
    SUCCESS = "successo",
    ERROR_BK = "errore-backend",
    WARNING = "ATTENZIONE",
    ERRORE_GENERICO = "errore"

}

export interface toastOptions {
    position?: ToastPosition,
    autoClose?: number,
    hideProgressBar?: boolean,
    newestOnTop?: boolean,
    rtl?: boolean
}
