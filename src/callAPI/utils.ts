// get user 
import { ResposeUtente } from "model/response"

export const getUser = (): ResposeUtente => {
     const json = JSON.stringify(localStorage.getItem("user"));
     const userString = JSON.parse(json);
     const user = JSON.parse(userString);

     return user;

}

// get token

export const getToken = (): string => {
    const token = localStorage.getItem('token');
    return token ? token : 'null';
}

