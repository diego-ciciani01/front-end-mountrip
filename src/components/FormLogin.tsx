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


function FormLogin(){ 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const dispatch = useAppDispatch();
    const navigate=useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Simulazione di un processo di autenticazione
        if (username === 'user' && password === 'password') {
          // Se le credenziali sono corrette, salva il nome utente nello stato interno
          setLoggedIn(true);
          // Reindirizza l'utente alla homepage
         console.log("utente loggato")
        } else {
          // Altrimenti, mostra un messaggio di errore
          console.log("utente non loggato")   
        }
      }

    return(
       <div className="container-form">
            <form onSubmit={handleSubmit}>
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
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required={true}
                    />
                    </div>
                </Box>
                    <br></br>
                <Button type="submit" variant="contained" style={{background:"#29C63C"}} disableElevation
                    onClick={async()=>{
                        const credentials: UtenteLogin = {
                            username,
                            password   
                        }
                        
                    try{
                        const result=await dispatch(authAction.logUtente(credentials));
                        unwrapResult(result);
                        navigate('/home');
                    }catch(e){
                        console.log(e)
                    }
                
                }}
                >
            {/* ####PER SAPERE A QUALE HOME MANDARE UN PARTICOLARE UTENTE, NELL'OGETTO DELL'UTENTE CI DEVE ESSERE ANCHE IL RUOLO#### */}
                
                    invia
                </Button>
                <Link style={{color:'black'}} to="/registrati">
                    <h3>Registrati</h3>
                </Link>
            </form>
    </div>
    );
}

export default FormLogin;