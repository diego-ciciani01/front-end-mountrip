// qui vanno i model da mandare al backend

export interface UtenteLogin{
    username:string;
    password:string;
}

export interface UtenteRegistrazione{
    nome:string;
    cognome:string;
    password:string;
    email:string;
    username:string;
    ruolo:string

}

