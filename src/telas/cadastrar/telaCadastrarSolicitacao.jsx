import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarSolicitacao() {
    const backendUrl = 'http://localhost:8090'

    useEffect(() => {
    }, []);

    const camposFormulario = [
        {
            tipo: 'hidden',
            label: 'customerId',
            tipoCampo: 'text',
            defaultValue: 1,
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'tag',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'cityId',
            opcoes: '',
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'address',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'typeId',
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
        <div className="tittleCadastrarSolicitacao">
            <Highbar/>
            <LayoutCadastro titulo="Solicitação de Serviço" valorUrlAdicionar="solicitacao">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarSolicitacao;