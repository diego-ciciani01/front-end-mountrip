import React, {useEffect, useState} from "react";
import { getToken, getUser } from "callAPI/utils";
import { authenticationSelector } from "store/authentication/authentication.selector";
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {escursioniSelector} from "../store/escursioni/escursioni.selector"
import {PaginaTipo} from "../store/escursioni/types"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {ResposeAttivita} from '../model/response'
import Item from "./Item";
import { Button } from "@mui/material";

export interface EscursioniItemProps {
    audiobooks: ResposeAttivita[];
    onSelectAudiobook: (audiobook: ResposeAttivita) => void;
}

function EscursioniList ({props}) {
    const check = useSelector(authenticationSelector.userLogin);
    const user = useSelector(authenticationSelector.userLogin);
    const LIST = useSelector(escursioniSelector.list)
    const pageType = useSelector(escursioniSelector.page)
    const [escursioneSelezionata, setEscursioneSelezionata] = useState <ResposeAttivita| any>();

    // variabile usata per moccare il BE
    // const {escursioni} = props;


    const navigate = useNavigate(); 

    console.log("cioaooo",props[0].organizzatore)
     // qui controllo se l'utente è loggato, se non lo è lo reindirizzo alla pagina di login
       useEffect(() => {
        if (!check || getToken() === null) {
            navigate('/login');
            return;
        }
    }, []);
    // questa funzione restituisce un allert se non ci sono uscite in bacheca 



    // funzione che ritorna un messaggio quando no ci sono informazioni da mostrare 
    function listaVuota(){
        if(LIST?.length === 0){
            if(pageType === PaginaTipo.HOMEPAGE){
                return <Alert severity="warning">Non hai ancora effettuato nessuona iscrizione </Alert>
            }else if(pageType === PaginaTipo.MIEATTIVITA){
                return <Alert severity="warning">Non hai creato ancora nessuna attività </Alert>
            } else if(pageType === PaginaTipo.ATTIVITAPUBBLICHE){
                return <Alert severity="warning">Non ci sono ancora attività pubbliche alle quali puoi iscriverti </Alert>
            }else if(pageType === PaginaTipo.INVITI){
                return <Alert severity="warning">Non hai ricevuto ancora nessun invito </Alert>
            }
        }
    }
    // questa funzione ti permette di accettare la partecipazione alle attività sotto la voce inviti

    return(
        
        (!check) ? <div id="pagina vuota"></div> :
        (escursioneSelezionata == null) ?
        (
            <div>
                <Navbar username={user}/>
                <div className='row d-flex justify-content-center'>
                    {
                        // LIST.map((uscite, index) => <Item key={index} LIST={uscite} escursioneSelezionata={escursioneSelezionata}

                        // ></Item>)
                        // escursioni?.map((uscite, index) => <Item key={index} escursioni={uscite}></Item>)
                        <Item props={props}></Item>
                    }   
                </div>
                {/* {listaVuota()}
                {pageType===PaginaTipo.HOMEPAGE && <Button data-testid='buttonAggiungiEscursione'
                    onClick={() => navigate('/creaEscursione')}> aggiungi una nuova escursione </Button>} */}
            </div>   
        ):(
            <div></div>
        )
    )

}

export default EscursioniList;