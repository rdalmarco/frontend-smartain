import React from "react";
import '../css/layoutCadastro.css';
import {Link} from "react-router-dom";


function LayoutCadastro({titulo, valorUrlAdicionar, children}) {
    return (
        <div className="containerCadastro">
            <h1 className="tittleCadastro">Cadastrar {titulo}</h1>
            {children}
            <div className="buttonsCadastro">
                <button className="salvarCadastro" type="submit">Salvar</button>
                <Link to={`/cadastros/${valorUrlAdicionar}`}>
                    <button className="voltarCadastro">Voltar</button>
                </Link>
                <button className="excluirCadastro" type="submit">Excluir</button>
            </div>
        </div>
    );
}

export default LayoutCadastro;
