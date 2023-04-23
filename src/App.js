import './App.css';
import FormLogin from './components/FormLogin.tsx';
import FormRegistrazione from './components/FormRegistrazione.tsx';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx'
import Index from './components/Index.tsx';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route  exact path='/registrati' Component={FormRegistrazione}/>
        <Route exact path='/login' Component={FormLogin}/>
        <Route exact path='/home' Component={Home}/>
      </Routes>
    </Router>

  );
}

export default App;
