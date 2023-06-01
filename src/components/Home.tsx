import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/store.config";
import { authenticationSelector } from "store/authentication/authentication.selector";
import { getToken, getUser } from "callAPI/utils";
import {escursioniAction} from '../store/escursioni/escursioni.action'
import Navbar from './Navbar'


function Home(){

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const check = useSelector(authenticationSelector.userLogin);
    const user = getUser()
    // da aggiungere un selettore per la gestione delle card
    useEffect(() => {
        
        if(getToken()==='null' || !check){
            navigate('/login');

        } else {
            // vai a prendere le card dallo store
            // RICORDA IL TIPO DI ESCURSIONE DA PRENDERE (UTENTE O ASSOCIAZIONE) LO CAPISCE 
            // IL BE IN BASE AL JVT TOKEN
            
            dispatch(escursioniAction.getAttivitaOrganizzate());
        }
    }, []);

    return(
        <Navbar></Navbar>
        
    );

}

export default Home;