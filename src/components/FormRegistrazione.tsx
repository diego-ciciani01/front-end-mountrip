import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import {Link, Navigate} from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from "@mui/material/Box";
import { UtenteRegistrazione } from '../model/requestDTO';


function FormRegistrazione(){
    // variabili per entità utente
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ripetiPassword, setRipetiPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome ] = useState('');
    const [cognome, setCognome] = useState('');
    const [ruolo, setRuolo] = useState('');

    // variabili per funzionalità degli del form
    const [registrati, setRegistrazione] = useState(false);
    const [errore, setErrore] =  useState('');

    const cambiaRuolo = (event: SelectChangeEvent) => {
            setRuolo(event.target.value as string);
            console.log(event.target)         
    };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const array = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "?"];
    const special = (c) => {
        for (let i = 0; i < array.length; i++)
        {
            // console.log(c);           
            if (c == array[i])
            {
                // console.log("merdaaa");           
                return true;
            }
        }
        return false;
    }

    function checkPassword(password, ripetiPassword){

        // aggiungi altre funzionalirà per la password, tipo lunghezza e necessita di caratteri
        // speciali 
        setErrore('');
        if(password == ripetiPassword){
            for(let i=0; i<password.length; i++){
                if(special(password.charAt(i))){
                    console.log("bella pe voi")
                    return true;
                }
            } 
            setErrore("non è presente nessun carattere speciale nella password")
           return false;
        }else{
            setErrore("le due password sono diverse");
            return false;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (checkPassword(password, ripetiPassword)){
            console.log(setErrore);
            // dopo aver controllato la password passo al controllo della email in termini di carattere
            if (isValidEmail(email)) {
                console.log('The email is valid');
            } else {
                setErrore("l'email è invalida");
                console.log('The email is invalid');   
            }
        }else if(event.target.value == ""){
            setErrore("Devi scegliere un ruolo!")
        }
        setRegistrazione(true);
    };

    return(
        <div className='container-form'>
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
                                id="filled-required-nome"
                                label="nome"
                                variant="filled"
                                onChange={(e) => setNome(e.target.value)}
                                value={nome}
                                required={true}

                        />
                        <TextField
                                style={{ background: "#E1F0DA" }}
                                required={true}
                                id="filled-required-cognome"
                                label="cognome"
                                variant="filled"
                                onChange={(e) => setCognome(e.target.value)}
                                value={cognome}
                        />
                    </div>
                    <div>
                        <TextField
                            style={{ background: "#E1F0DA" }}
                            required={true}
                            id="filled-required-username"
                            label="username"
                            variant="filled"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}

                        /> 
                         <TextField
                            style={{ background: "#E1F0DA" }}
                            required={true}
                            id="filled-required-email"
                            type="email"
                            label="email"
                            variant="filled"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            
                        /> 
                    </div>
                    <div>
                        <TextField
                            style={{ background: "#E1F0DA" }}
                            id="filled-password-input"
                            required={true}
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            
                        />
                         <TextField
                            style={{ background: "#E1F0DA" }}
                            id="filled-ripeti-password-input"
                            required={true}
                            label="Ripeti password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            onChange={(e) => setRipetiPassword(e.target.value)}
                            value={ripetiPassword}
                        />
                    </div>
                    <br></br>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Ruoli</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={ruolo}
                        label="Ruoli"
                        onChange={cambiaRuolo}
                        >
                        <MenuItem value={'utente'} >Utente</MenuItem>
                        <MenuItem value={'Admin'} placeholder="Admin">Admin</MenuItem>
                        <MenuItem value={'Associazione'} placeholder="Associazione">Associazione</MenuItem>
                        </Select>
                    </FormControl>
                    <br></br>
                </Box>  
                <Button type="submit" variant="contained" style={{background:"#29C63C"}} disableElevation 
                onClick={async()=>{
                    const credenzial: UtenteRegistrazione = {
                        nome,
                        cognome,
                        email,
                        username,
                        password,
                        
                    }
                    try{
                        
                    }
                }}>
                    Registrati
                </Button>
              {errore && <h2 style={{color: 'red'}}>{errore}</h2>}
            </form>
        </div>
    );
}

export default FormRegistrazione;