import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaMaquinas() {
    //Aqui será recebido os dados do backend
    const dados = [
        [
            { Nome: 'Maquina 1', Modelo: 'Modelo 1',  Status:'Ativo'},
            { Nome: 'Maquina 2', Modelo: 'Modelo 2',  Status:'Ativo'}
        ],
    ];

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Maquinas" valorUrlAdicionar="maquina" dados={dados}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaMaquinas;