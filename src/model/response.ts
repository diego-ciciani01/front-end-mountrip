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
    dataInizio:string;
    dataFine:string;
    luogoPartenza:string;
    luogoArrivo:string;
    percorsoGPX:string;
    publica:boolean;
    difficolta:string;
    commenti: ResponseCommento[];
    organizzatore: string;
    valutazione:number;

}

export interface  ResponseCommento{
    idCommento:number;
    author:string;
    text:string;
    date:string;
    attivitaCommentata:number;
    commentoPadreId:number;

}


export interface ResposeAccettata {
    status: boolean;
}