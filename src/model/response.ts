export interface ResposeLogin{
    tokenJWT : string ;
    utente: ResposeUtente;
}

export interface ResposeUtente {
    nome: string;
    cognome: string;
    username: string;
    ruolo:string;
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

export interface ResposeAccettata {
    status: boolean;
}