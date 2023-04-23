import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';


function Navbar(){
    return(
        <div className='Navbar'>
                <div>
                    <img src={logo}></img>
                </div>   
                <ul className='Links'>
                    <Link style={{color:'black', textDecoration:'none'}} to="/login">
                        <li>Accedi</li>
                    </Link>
                    <Link style={{color:'black', textDecoration:'none'}} to="/registrati">
                        <li>Registrati</li>                
                    </Link>
                    <Link style={{color:'black', textDecoration:'none'}} to="/chi-siamo">
                        <li>Chi siamo</li>
                    </Link>
                </ul>
            </div>
    );
    
}

export default Navbar;