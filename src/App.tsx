import './App.css';
import FormLogin from './components/FormLogin';
import FormRegistrazione from './components/FormRegistrazione';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import React from 'react';
import { Card } from '@mui/material';
import AttivitaPubbliche from './components/AttivitaPubbliche'
import Inviti from './components/Inviti'

function App() {
  return (
    <Router>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route  path='/registrazione' Component={FormRegistrazione}/>
        <Route  path='/login' Component={FormLogin}/>
        <Route  path='/home' Component={Home}/>
        <Route  path='/attivita' Component={Card}/>
        <Route  path='/attivita-pubbliche' Component={AttivitaPubbliche}/>
        <Route  path='/inviti' Component={Inviti}/>
      </Routes>
    </Router>

  );
}

export default App;