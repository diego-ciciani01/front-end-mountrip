import './App.css';
import FormLogin from './components/FormLogin.tsx';
import FormRegistrazione from './components/FormRegistrazione.tsx';
import Navbar from './components/Navbar.tsx';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import React from 'react';

function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route  exact path='/registrati' Component={FormRegistrazione}/>
        <Route exact path='/login' Component={FormLogin}/>
        {/* <Route exact path='/home' Component={Home}/> */}
      </Routes>
    </Router>

  );
}

export default App;
