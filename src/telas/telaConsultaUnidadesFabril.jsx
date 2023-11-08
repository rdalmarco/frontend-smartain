import {Link} from "react-router-dom";
import Highbar from "../componentes/highbar";
import Bottombar from "../componentes/bottombar";
import React from "react";
import LayoutConsulta from "../componentes/layoutConsulta";

function TelaConsultaUnidadesFabris() {
    //Aqui será recebido os dados do backend
    const dadosUnidades = [
        [
            { Nome: 'Fabrica 1', Cidade: 'Rio do Sul', Tipo: '1', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
        ],
    ];

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Unidades Fabril" valorUrlAdicionar="unidadefabril" dados={dadosUnidades}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaUnidadesFabris;