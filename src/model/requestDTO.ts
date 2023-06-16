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
    ruolo:string;
    immagine:any;

}

export interface RequestUtenteModifica{
    nome:string;
    cognome:string;
    username:string;
    email:string;
    password:string;
    immagine:any
}

export interface UtenteLogout{
    jwtToken:string
}

export interface Commenti{
    testo:string;
    dataInserimento:Date;
    commentoPadre:string;
    commentoFiglio:string;
    attivitàCommentate:string;
    utenteCommentatore:string;

}

// escursione

export interface ResquestEscursioneIserimento {
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

export interface AccettaAttivita {
    jwtToken:string
}   