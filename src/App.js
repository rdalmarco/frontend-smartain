import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
import logo from "./images/logo-smartain.png";

function App() {
    return (
        <div className="containerApp">
            <img src={logo} alt="logo"/>
            <div className="buttons">
                <Link to="/login" className="entrarApp">Entrar</Link>
                <Link to="/cadastrar" className="cadastrarApp">Cadastrar</Link>
            </div>
        </div>
    );
}

export default App;
