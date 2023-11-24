import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaFabricantes() {
    //Aqui será recebido os dados do backend
    const dados = [
        [
            { Nome: 'Fabricante 1', CNPJ: '00000000000-1',  Status:'Ativo'},
            { Nome: 'Fabricante 2', CNPJ: '00000000000-2',  Status:'Ativo'}
        ],
    ];

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Fabricantes" valorUrlAdicionar="fabricante" dados={dados}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaFabricantes;