import React, {useEffect, useState} from 'react';
import {unwrapResult} from '@reduxjs/toolkit';
import '../App.css';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom';
import {UtenteLogin} from './../model/requestDTO';
import {authAction} from './../store/authentication/authentication.actions'
import {useAppDispatch} from './../store/store.config'
import {useSelector} from 'react-redux';
import { Md5 } from 'ts-md5/dist/md5';
import { authenticationSelector } from 'store/authentication/authentication.selector';
import { getUser } from 'callAPI/utils';



function FormLogin(){ 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const dispatch = useAppDispatch();
    const navigate=useNavigate();

    useEffect(()    => {
        window.localStorage.clear();
    }   , []);
    
    // const loading= useSelector(authenticationSelector.load);


    const criptMD5 = (event) => {
        setInputPassword(event.target.value);
        setPassword(Md5.hashStr(event.target.value));

    }

    

    return(
       <div className="container-form">
            <h1 className='titolo-form'>MounTrip</h1>
                <Box
                    component="form"
                    sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" }
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                    <TextField
                        style={{ background: "#E1F0DA" }}
                        id="filled-required"
                        label="username"
                        variant="filled"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required={true}

                    />
                    </div>
                    <div>
                    <TextField
                        style={{ background: "#E1F0DA" }}
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        onChange= {e => criptMD5(e)}
                        value={inputPassword}
                        required={true}
                    />
                    </div>
                </Box>
                    <br></br>
                <Button type="submit" variant="contained" style={{background:"#29C63C"}} 
                    onClick={async()=>{                        
                        const credentials: UtenteLogin = {
                            username,
                            password   
                        }
                        
                    try{
                       console.log("bella pe tee") 
                        const result=await dispatch(authAction.logUtente(credentials));
                        unwrapResult(result);
                        // divido la home in base al tipo di utente loggato
                        const utente = getUser();
                        // if(utente.username)
                        navigate('/home');
                    }catch(e){
                        console.log('error', e)
                    }
                
                }}
                >
            {/* ####PER SAPERE A QUALE HOME MANDARE UN PARTICOLARE UTENTE, NELL'OGETTO DELL'UTENTE CI DEVE ESSERE ANCHE IL RUOLO#### */}
                
                    invia
                </Button>
                <Link style={{color:'black'}} to="/registrazione">
                    <h3>Registrati</h3>
                </Link>
    </div>
    );
}

export default FormLogin;