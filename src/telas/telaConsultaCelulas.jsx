import {Link} from "react-router-dom";
import Highbar from "../componentes/highbar";
import Bottombar from "../componentes/bottombar";
import React from "react";
import LayoutConsulta from "../componentes/layoutConsulta";

function TelaConsultaCelulas() {
    //Aqui será recebido os dados do backend
    const dados = [
        [
            { Nome: 'Alerta 1', Plano: 'Plano 1',  Status:'Ativo'},
            { Nome: 'Alerta 2', Plano: 'Plano 2',  Status:'Ativo'},
            { Nome: 'Alerta 3', Plano: 'Plano 3',  Status:'Ativo'},
            { Nome: 'Alerta 4', Plano: 'Plano 4',  Status:'Ativo'},
            { Nome: 'Alerta 5', Plano: 'Plano 5',  Status:'Ativo'},
            { Nome: 'Alerta 6', Plano: 'Plano 6',  Status:'Ativo'},
            { Nome: 'Alerta 7', Plano: 'Plano 7',  Status:'Ativo'},
        ],
    ];

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Celulas" valorUrlAdicionar="celula" dados={dados}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaCelulas;