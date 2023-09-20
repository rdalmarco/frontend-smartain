import './App.css';
import React, { useState } from 'react';
import TelaLogin from "./componentes/telaLogin";
import TelaCadastrar from "./componentes/telaCadastrar";
import logo from "./images/logo-smartain.png";


function App() {
    const [telaAtual, setTelaAtual] = useState('telaInicial');

    const navegarParaTelaLogar = () => {
        setTelaAtual('telaLogin');
    };

    const navegarParaTelaCadastrar = () => {
        setTelaAtual('telaCadastrar');
    };

    return (
            <div className="">
               {/*Condicional para carregar telaInicial somente quando for a tela atual.*/}
                {telaAtual === 'telaInicial' && (
                    <div>
                        <div className="container">
                            <img src={logo} alt="logo"/>
                            <button className="entrar" onClick={navegarParaTelaLogar}>Entrar</button>
                            <button className="cadastrar" onClick={navegarParaTelaCadastrar}>Cadastrar</button>
                        </div>
                    </div>
                )}
                {telaAtual === 'telaLogin' && <TelaLogin />}
                {telaAtual === 'telaCadastrar' && <TelaCadastrar />}
            </div>
    );
}

export default App;
