import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/store.config";
import { authenticationSelector } from "store/authentication/authentication.selector";
import { getToken } from "callAPI/utils";
import {escursioniAction} from '../store/escursioni/escursioni.action'

function Home(){

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const check = useSelector(authenticationSelector.userLogin);
    // da aggiungere un selettore per la gestione delle card
    useEffect(() => {
        
        if(getToken()==='null' || !check){
            navigate('/login');

        } else {
            // vai a prendere le card dallo store 
            dispatch(escursioniAction.getListEscursioni());
        }
    }, []);

    return(
        <div></div>
    );

}

export default Home;