import {Link} from "react-router-dom";
import Highbar from "../componentes/highbar";
import Bottombar from "../componentes/bottombar";
import React from "react";
import LayoutConsulta from "../componentes/layoutConsulta";

function TelaConsultaSetores() {
    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Setores" valorUrlAdicionar="setor"/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaSetores;