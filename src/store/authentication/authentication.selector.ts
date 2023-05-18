import {RootState} from 'store/store.config'

const userLogin = (state:RootState) => state.authentication.ResponeLogin?.utente;
const load = (state:RootState) => state.authentication.load;

export const authenticationSelector = {
    userLogin,
    load
}