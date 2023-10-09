import {Link} from "react-router-dom";
import '../css/telaLogin.css';
import React from "react";

function TelaLogin() {
    return (
        <div className="tittleLogin">
            <h1>Login</h1>
            <div className="containerLogin">
                <div className="campos">
                    <p>Email</p>
                    <input className="email" type="text"/>
                    <p>Senha</p>
                    <input className="senha" type="password"/>
                    <Link to="/menu">
                        <button className="logar">Logar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TelaLogin;
