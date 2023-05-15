import './App.css';
import FormLogin from './components/FormLogin';
import FormRegistrazione from './components/FormRegistrazione';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import React from 'react';

function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route   path='/registrati' Component={FormRegistrazione}/>
        <Route  path='/login' Component={FormLogin}/>
        {/* <Route exact path='/home' Component={Home}/> */}
      </Routes>
    </Router>

  );
}

export default App;
