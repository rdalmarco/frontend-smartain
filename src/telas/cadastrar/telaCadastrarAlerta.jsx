import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarAlerta() {
    const backendUrl = 'http://localhost:8090'

    useEffect(() => {
    }, []);

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'technicalData',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'sectorId',
            opcoes: '',
            tipoValue: 'int',
        },
        {
            tipo: 'hidden',
            label: 'status',
            tipoCampo: 'text',
            defaultValue: 'ACTIVE',
        },
    ];

    return (
        <div className="tittleCadastrarAlerta">
            <Highbar/>
            <LayoutCadastro titulo="Alerta" valorUrlAdicionar="alerta">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/glo/`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarAlerta;
