import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaUsuario() {
    //Aqui será recebido os dados do backend
    const dados = [
        [
            { Nome: 'Nome 1', Email: 'Email 1',  Status:'Ativo'},
            { Nome: 'Nome 2', Email: 'Email 2',  Status:'Ativo'}
        ],
    ];

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Usuários" valorUrlAdicionar="usuario" dados={dados}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaUsuario;