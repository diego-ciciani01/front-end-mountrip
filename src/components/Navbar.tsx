import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from 'img/logo.png';
import { getUser } from "callAPI/utils";

function Navbar(username){
    const user = getUser()
    return(
        <div>
                {(user.ruolo ==="UTENTE") ? (
                    <div className='Navbar'>
                        <div>
                            <img src={logo}></img>
                        </div>   
                        <ul className='Links'>
                            <Link style={{color:'black', textDecoration:'none'}} to="/home">
                                <li>Home</li>
                            </Link>
                            <Link style={{color:'black', textDecoration:'none'}} to="/attivita">
                                <li>Le mie attvità</li>                
                            </Link>
                            <Link style={{color:'black', textDecoration:'none'}} to="/attivita-pubbliche">
                                <li>Attvità pubbliche</li>
                            </Link>
                            <Link style={{color:'black', textDecoration:'none'}} to="/inviti">
                                <li>Inviti</li>
                            </Link>
                            <Link style={{color:'black', textDecoration:'none'}} to="/modifica-utente">
                                <li>modifica</li>
                            </Link>
                        </ul>
                     
                    </div>
            ):(
                <div className='Navbar'>
                    <div>
                        <img src={logo}></img>
                    </div>   
                    <ul className='Links'>
                        <Link style={{color:'black', textDecoration:'none'}} to="/home">
                            <li>Attività Programmate</li>
                        </Link>
                        <Link style={{color:'black', textDecoration:'none'}} to="/attivita-passate">
                            <li>Attività Passate</li>                
                        </Link>
                    </ul>
                </div>
            )}
        
     </div>
    );
    
}

export default Navbar;