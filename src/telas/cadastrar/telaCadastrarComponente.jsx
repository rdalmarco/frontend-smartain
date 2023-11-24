import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarComponente() {
    const backendUrl = 'http://localhost:8090'

    useEffect(() => {
    }, []);

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'name',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'technicalData',
            tipoCampo: 'text',
        },
    ];

    return (
        <div className="tittleCadastrarComponente">
            <Highbar/>
            <LayoutCadastro titulo="Componente" valorUrlAdicionar="componente">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/glo/`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarComponente;
