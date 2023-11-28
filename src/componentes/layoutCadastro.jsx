import React from "react";
import '../css/layoutCadastro.css';
import {Link} from "react-router-dom";


function LayoutCadastro({titulo, valorUrlAdicionar, children}) {
    return (
        <div className="containerCadastro">
            <div className="buttonsCadastro">
            <Link to={`/cadastros/${valorUrlAdicionar}`}>
                <button className="voltarCadastro">Voltar</button>
            </Link>
            </div>
            <h1 className="tittleCadastro">Cadastrar {titulo}</h1>
            {children}
        </div>
    );
}

export default LayoutCadastro;
