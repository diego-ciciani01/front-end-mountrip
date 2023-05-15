export interface ResponeLogin{
    tokenJWT : string;
    utente: ResponseUtente;
}

export interface ResponseUtente {
    nome: string;
    cognome: string;
    username: string

}