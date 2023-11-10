import {Link} from "react-router-dom";
import Highbar from "../componentes/highbar";
import Bottombar from "../componentes/bottombar";
import React from "react";
import LayoutConsulta from "../componentes/layoutConsulta";

function TelaConsultaManuais() {
    //Aqui será recebido os dados do backend
    const dados = [
        [
            { Nome: 'Manual 1', Máquina: 'CNC 1',  Status:'Ativo'},
            { Nome: 'Manual 2', Máquina: 'CNC 2',  Status:'Ativo'},
            { Nome: 'Manual 3', Máquina: 'CNC 3',  Status:'Ativo'},
            { Nome: 'Manual 4', Máquina: 'CNC 4',  Status:'Ativo'},
            { Nome: 'Manual 5', Máquina: 'CNC 5',  Status:'Ativo'},
            { Nome: 'Manual 6', Máquina: 'CNC 6',  Status:'Ativo'},
            { Nome: 'Manual 7', Máquina: 'CNC 7',  Status:'Ativo'},
        ],
    ];

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Manuais" valorUrlAdicionar="manual" dados={dados}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaManuais;