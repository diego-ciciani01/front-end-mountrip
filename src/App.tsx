import './App.css';
import FormLogin from './components/FormLogin';
import FormRegistrazione from './components/FormRegistrazione';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import React from 'react';

function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route  path='/registrazione' Component={FormRegistrazione}/>
        <Route  path='/login' Component={FormLogin}/>
        <Route  path='/home' Component={Home}/>
      </Routes>
    </Router>

  );
}

export default App;