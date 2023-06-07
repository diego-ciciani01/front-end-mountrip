import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/store.config";
import { authenticationSelector } from "store/authentication/authentication.selector";
import { getToken, getUser } from "callAPI/utils";
import {escursioniAction} from '../store/escursioni/escursioni.action'
import Navbar from './Navbar'
import Card from "./Card";



function Home(){

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const check = useSelector(authenticationSelector.userLogin);
    const user = getUser()
    const tipoPagina = "home";
    // da aggiungere un selettore per la gestione delle card
    useEffect(() => {
        
        if(getToken()==='null' || !check){
            navigate('/login');

        } else {
            // vai a prendere le card dallo store
            // RICORDA IL TIPO DI ESCURSIONE DA PRENDERE (UTENTE O ASSOCIAZIONE) LO CAPISCE 
            // IL BE IN BASE AL JVT TOKEN
            
            dispatch(escursioniAction.getAttivitaOrganizzate());
         
            const commenti = [
              [
                {organizzatore:'luca',descrizione:'escrsione sul corno granda - campo imperatore',difficolta:'E1', data:[
                    "13-03-2024", "09:30", "Elis", "Campo imperatore"], cuota: 20, commenti: 
                    [
                        {idCommento:'1', author: 'luca', text: 'è stata una bellissima escursione', date: '2024-04-12', attivitaCommentata:'1', commentoPadreId:'0'},
                        {idCommento:'2', author: 'marco', text: 'la guida è stata all altezza della difficoltà del percorso', date: '2024-04-12', attivitaCommentata:'1', commentoPadreId:'0'},
                        {idCommento:'3', author: 'luisa', text: 'hai proprio ragione', date: '2024-04-12', attivitaCommentata:'1', commentoPadreId:'1'},
                    ],
                    stato:'aperto', lunghezza:12, valutazione:[1,2,3,4,5]
                
                }
              ]
            ]

        }
    }, []);

    return(
        <>
            <Navbar></Navbar>
            <Card tipoPagina={tipoPagina}/>
        </>

    );

}

export default Home;