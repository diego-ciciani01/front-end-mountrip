import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from "@mui/material/Box";
import { UtenteRegistrazione } from '../model/requestDTO';
import {useAppDispatch} from 'store/store.config';
import { toastActions } from 'store/toast/toast.action';
import { toastType } from 'store/toast/type';
import { DatasetLinked, Password } from '@mui/icons-material';
import PhotoIcon from '@mui/icons-material/Photo';
import IconButton from '@mui/material/IconButton';
import { Md5 } from 'ts-md5/dist/md5';
import {RegistrazioneHoks} from './hoks/hoksRegistrazione';


function FormRegistrazione(){
    // variabili per entità utente
    const [ripetiPassword, setRipetiPassword] = useState('');
    const [ruolo, setRuolo] = useState('');
    const [password, setPassword] = useState('');
    const [requestUserSingUp, setRequestUserSingUp] = useState<UtenteRegistrazione>();
    const [newUser, setNewUser] = useState<UtenteRegistrazione>({
        nome: '',
        cognome: '',
        password: '',
        email: '',
        ruolo: '',
        username: '',
        immagine: ''
    });
    
    // variabili per funzionalità degli del form
    const [errore, setErrore] =  useState('');

    const [isLoading, data] = RegistrazioneHoks(requestUserSingUp);
    
    useEffect(() => {  
        if (data) {
            navigate('/login');
        }
    }, [data]); 


    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const cambiaRuolo = (event: SelectChangeEvent) => {
        // onChange={(e) => setNewUser({...newUser, cognome:e.target.value})}
        setNewUser({...newUser, ruolo:event.target.value})
    };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const array = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "?"];
    const special = (c) => {
        for (let i = 0; i < array.length; i++)
        {
            if (c == array[i])
            {
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
                    console.log(password)
                    console.log(ripetiPassword)
                    //converti la password in MDC e la salvo nell'oggetto utente
                    const md5 = Md5.hashStr(password);
                    console.log(md5);
                    setNewUser({...newUser, password:md5})
                    // console.log(newUser.password);
                    return true;
                }      
            } 
            setErrore("non è presente nessun carattere speciale nella password")
            dispatch(toastActions.show({message: "non è presente nessun carattere speciale nella password", type: toastType.ERRORE_GENERICO}))
           return false;
        }else{
            setErrore("le due password sono diverse");
            dispatch(toastActions.show({message: "le due password sono diverse", type: toastType.ERRORE_GENERICO}))
            return false;
        }    
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (checkPassword(password, ripetiPassword)){
            console.log(setErrore);
            // dopo aver controllato la password passo al controllo della email in termini di carattere
            if (isValidEmail(newUser.email)) {
                console.log('The email is valid');
            } else {
                setErrore("l'email è invalida");
                dispatch(toastActions.show({message: "l'email è invalida", type: toastType.ERRORE_GENERICO}))
                return;
            }
        }else if(event.target.value == ''){
            dispatch(toastActions.show({message: "deve essere scelto un ruolo", type: toastType.ERRORE_GENERICO}))
            setErrore("Devi scegliere un ruolo!")
            return;
        }
        setRequestUserSingUp(newUser);
        console.log(newUser);

        
    };
    // questa funzione mi converte il file, nel tipo base 64
   const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }
    
    const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file)
    setNewUser({...newUser, immagine: base64})
    }

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
                        <IconButton component="label">
                            <input
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                onChange={e => handleFileRead(e)}
                                multiple
                                hidden
                            />
                             <PhotoIcon />
                        </IconButton>  
                    </div>

                    <div>
                        <TextField
                                style={{ background: "#E1F0DA" }}
                                id="filled-required-nome"
                                label="nome"
                                variant="filled"
                                // onChange={(e) => setNome(e.target.value)}
                                onChange={(e) => setNewUser({...newUser, nome:e.target.value})}
                                value={newUser.nome}
                                required={true}

                        />
                        <TextField
                                style={{ background: "#E1F0DA" }}
                                required={true}
                                id="filled-required-cognome"
                                label="cognome"
                                variant="filled"
                                onChange={(e) => setNewUser({...newUser, cognome:e.target.value})}
                                value={newUser.cognome}
                                
                        />
                    </div>
                    <div>
                        <TextField
                            style={{ background: "#E1F0DA" }}
                            required={true}
                            id="filled-required-username"
                            label="username"
                            variant="filled"
                            onChange={(e) => setNewUser({...newUser, username:e.target.value})}
                            value={newUser.username}

                        /> 
                         <TextField
                            style={{ background: "#E1F0DA" }}
                            required={true}
                            id="filled-required-email"
                            type="email"
                            label="email"
                            variant="filled"
                            onChange={(e) => setNewUser({...newUser, email:e.target.value})}
                            value={newUser.email}
                            
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
                        <MenuItem value={'Associazione'} placeholder="Associazione">Associazione</MenuItem>
                        </Select>
                    </FormControl>
                    <br></br>
                </Box>  
                <Button type="submit" variant="contained" style={{background:"#29C63C"}} disableElevation>
                    Registrati
                </Button>
              {errore && <h2 style={{color: 'red'}}>{errore}</h2>}

            </form>
        </div>
    );
}
export default FormRegistrazione;