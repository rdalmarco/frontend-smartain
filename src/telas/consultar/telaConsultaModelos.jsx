import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaModelos() {
    //Aqui será recebido os dados do backend
    const dados = [
        [
            { Descricao: 'Modelo 1', Fabricante: 'Fabricante 1',  Status:'Ativo'},
            { Descricao: 'Modelo 2', Fabricante: 'Fabricante 2',  Status:'Ativo'}
        ],
    ];

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Modelos" valorUrlAdicionar="modelo" dados={dados}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaModelos;