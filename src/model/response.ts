export interface ResponeLogin{
    tokenJWT : string;
    utente: ResponseUtente;
}

export interface ResponseUtente {
    nome: string;
    cognome: string;
    username: string
}

export interface ResposeAttivita {
    nome:string;
    descrizione:string;
    quota:number;
    dataInizio:Date;
    dataFine:Date;
    luogoPartenza:string;
    luogoArrivo:string;
    percorsoGPX:string;
    publica:boolean;
    difficolta:number;
    commenti: string;
    organizzatore: string;

}