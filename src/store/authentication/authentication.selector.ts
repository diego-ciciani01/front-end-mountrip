import {RootState} from 'store/store.config'

const userLogin = (state:RootState) => state.authentication.ResponeLogin?.utente;


export const authenticationSelector = {
    userLogin
}