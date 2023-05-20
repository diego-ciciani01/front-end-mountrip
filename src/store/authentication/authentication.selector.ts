import {RootState} from 'store/store.config'

const userToken = (state:RootState) => state.auth.responseLogin?.tokenJWT;
const userLogin = (state:RootState) => state.auth.responseLogin?.utente



// const userLogin = (state:RootState) => state.auth.ResposeLogin?.utente;

// console.log(userLogin);
export const authenticationSelector = {
    userLogin,
    userToken
}