import {ResposeAttivita} from "model/response"

export interface typeAttivitaState{
    escursioni:ResposeAttivita[] ;
    error:boolean;    
    page:PaginaTipo;
}

export enum PaginaTipo{
    HOMEPAGE=1,
    MIEATTIVITA=2,
    ATTIVITAPUBBLICHE=3,
    INVITI=4

}