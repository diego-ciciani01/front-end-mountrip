
import {UtenteRegistrazione} from "../../model/requestDTO"
import {useAppDispatch} from "../../store/store.config"
import {useEffect, useState} from 'react';
import {ResponseUtente} from '../../model/response';
import {registraUser} from '../../callAPI/userAPI'
import { AxiosError } from "axios";

export const RegistrazioneHoks = (dto?: UtenteRegistrazione) =>{

    const dispatch = useAppDispatch();
    const [Registra, setRegistrazione] = useState<boolean>(false);
    const [data, setData] = useState<ResponseUtente>();

    useEffect(() =>{
        const cattura = async()  =>{
            try {
               setRegistrazione(true); 
               if(dto){
                const risposta = await registraUser(dto)
                const rispostaDTO = risposta.data;
                setData(rispostaDTO);
               }
            } catch (error) {
                console.log(error as AxiosError);
            }finally{
                setRegistrazione(false);
            }
            
        }
        cattura();
    }, [dto]);
return [Registra, data];

}

