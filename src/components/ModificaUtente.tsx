import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PhotoIcon from '@mui/icons-material/Photo';
import IconButton from '@mui/material/IconButton';
import { RequestUtenteModifica } from '../model/requestDTO';
import Button from '@mui/material/Button';
import { Md5 } from 'ts-md5/dist/md5';
import { authAction } from "store/authentication/authentication.actions";
import { useAppDispatch } from "store/store.config";

function ModificaUtente(){
    const dispatch = useAppDispatch();
    const [user, setUser] = useState<RequestUtenteModifica>({
        nome: '',
        cognome: '',
        password: '',
        email: '',
        username: '',
        immagine: ''
    });
    const [ripetiPassword, setRipetiPassword] = useState('');
    const [password, setPassword] = useState('');
    const [errore, setErrore] =  useState('');

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
        setUser({...user, immagine: base64})
    }

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
                    setUser({...user, password:md5})
                    // console.log(newUser.password);
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
            if (isValidEmail(user.email)) {
                console.log('The email is valid');
            } else {
                setErrore("l'email è invalida");
                return;
            }
        }else if(event.target.value == ''){
            setErrore("Devi scegliere un ruolo!")
            return;
        }
        dispatch(authAction.modificaUser(user))
        console.log(user);

        
    };

    return(
        <div className="container-form-modifica-utente">
            <form onSubmit={handleSubmit}> 
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                 noValidate
                autoComplete="off"
                >
            <div>
             <TextField
                required
                id="filled-required"
                label="Nome"
                variant="filled"
                onChange={(e) => setUser({...user, nome:e.target.value})}
                />
                 <TextField
                required
                id="filled-required"
                label="Cognome"
                variant="filled"
                onChange={(e) => setUser({...user, cognome:e.target.value})}
                />
                <TextField
                required
                id="filled-required"
                label="Username"
                variant="filled"
                onChange={(e) => setUser({...user, username:e.target.value})}
                />
                <TextField
                required
                id="filled-required"
                label="Email"
                variant="filled"
                onChange={(e) => setUser({...user, email:e.target.value})}

                />
                <TextField
                required
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                required
                id="filled-password-input"
                label="Ripeti Password"
                InputProps={{
                    readOnly: true,
                }}
                onChange={(e) => setRipetiPassword(e.target.value)}
                variant="filled"
                />
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
        </Box>
        <br />
         <Button type="submit" variant="contained" style={{background:"#29C63C"}} disableElevation>
                            modifica
            </Button>
        </form>
    </div>
    );

}

export default ModificaUtente;