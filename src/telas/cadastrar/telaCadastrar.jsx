import {Link} from "react-router-dom";
import '../../css/telaCadastrar.css';
import React from "react";

function TelaCadastrar() {
    return (
        <div className="tittleCadastrar">
            <h1>Cadastro</h1>
            <div className="containerCadastrar">
                <div className="campos">
                    <p>Nome</p>
                    <input className="nome" type="text" />
                    <p>Email</p>
                    <input className="email" type="text"/>
                    <p>Login</p>
                    <input className="login" type="text"/>
                    <p>Senha</p>
                    <input className="senha" type="password"/>
                    <p>Unidade</p>
                    <input className="unidade" type="text"/>
                    <p>Grupo</p>
                    <input className="grupo" type="text"/>
                    <Link to="/login">
                        <button className="cadastrarCadastrar">Cadastrar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TelaCadastrar;
