import {Link} from "react-router-dom";
import Highbar from "../componentes/highbar";
import Bottombar from "../componentes/bottombar";
import React from "react";
import LayoutConsulta from "../componentes/layoutConsulta";

function TelaConsultaSetores() {
    //Aqui será recebido os dados do backend
    const dadosSetores = [
        [
            { Nome: 'Setor 1', Unidade: 'Fabrica 1',  Status:'Ativo'},
            { Nome: 'Setor 2', Unidade: 'Fabrica 2',  Status:'Ativo'}
        ],
    ];

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Setores" valorUrlAdicionar="setor" dados={dadosSetores}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaSetores;