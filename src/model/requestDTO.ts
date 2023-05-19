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

export interface commenti{
    testo:string;
    dataInserimento:Date;
    commentoPadre:string;
    commentoFiglio:string;
    attivitàCommentate:string;
    utenteCommentatore:string;

}


// escursione

export interface resquestEscursione {
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
