import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
import logo from "./images/logo-smartain.png";

function App() {
    return (
        <div className="container">
            <img src={logo} alt="logo"/>
            <div className="buttons">
                <Link to="/login" className="entrar">Entrar</Link>
                <Link to="/cadastrar" className="cadastrar">Cadastrar</Link>
            </div>
        </div>
    );
}

export default App;
