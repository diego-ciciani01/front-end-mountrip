import { createAction } from "@reduxjs/toolkit";

export const enum actions {
    SHOW = 'show',
    HIDE = 'hide'
}

const show = createAction(actions.SHOW, (payload) => {
    return{
        payload: {
            type: payload.type,
            message: payload.message,
            options: payload.options
        }
    }
})

const hide = createAction(actions.HIDE, () =>{
    return{
        payload: {}
    }
})

export const toastActions={
    show,
    hide
}