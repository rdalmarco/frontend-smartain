import {Link} from "react-router-dom";
import Highbar from "../componentes/highbar";
import Bottombar from "../componentes/bottombar";
import React from "react";
import LayoutConsulta from "../componentes/layoutConsulta";

function TelaConsultaEquipamentos() {
    //Aqui será recebido os dados do backend
    const dados = [
        [
            { Nome: 'Equipamento 1', Máquina: 'CNC 1',  Status:'Ativo'},
            { Nome: 'Equipamento 2', Máquina: 'CNC 2',  Status:'Ativo'}
        ],
    ];

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Equipamentos" valorUrlAdicionar="equipamento" dados={dados}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaEquipamentos;