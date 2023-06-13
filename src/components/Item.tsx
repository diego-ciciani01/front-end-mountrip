import React, {useEffect, useState} from "react";
import {getToken} from 'callAPI/utils'
import {ResposeAttivita} from '../model/response'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {authenticationSelector} from '../store/authentication/authentication.selector'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import copertina from '../img/escursione-in-montagna.jpg'
import CardDetails from "./CardDetails";

export interface escursioneItem{
    escursioni: ResposeAttivita;
    onSelect: (escursione: ResposeAttivita) => void;
}

function Item({props}) {
    const navigate = useNavigate();
    const check=useSelector(authenticationSelector.userLogin)
    const [openCard, setOpenCard] = useState(false);
    
    // controllo se l'utente è loggato e se non lo è lo reindirizzo alla login

    useEffect(() => {
        if( !check || getToken()===null){
            navigate('/login');
        }
    }, [])
    console.log("cioaooo",props[0].organizzatore)


    const {escursioni, onSelect} = props;
    
    const click = (event) =>{
        console.log("belllaaa")
        setOpenCard(true)
        
    }

    return(
    <div>
       <Card sx={{ maxWidth: 345 }} onClick={click}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={copertina}
                alt="trekking"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props[0].nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props[0].difficolta}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
            {openCard && <CardDetails></CardDetails>}

        </div>
    // show or not a component 

    );
}

export default Item;


