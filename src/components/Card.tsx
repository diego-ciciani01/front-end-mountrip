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

function Card (tipoPagina) {
    const check = useSelector(authenticationSelector.userLogin);
    const user = useSelector(authenticationSelector.userLogin);
    const escursioniList = useSelector(escursioniSelector.list)
    const pageType = useSelector(escursioniSelector.page)
    const [escursioneSelezionata, setEscursioneSelezionata] = useState <ResposeAttivita | null>();
    const navigate = useNavigate(); 
    var tipoPagina;


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
        if(escursioniList?.length === 0){
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
                        escursioniList?.map((escursione, index) => )
                    }
                </div>
            </div>   
        )
    ):(

    )

}

export default Card;