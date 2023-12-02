import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarFabricante() {
    const backendUrl = 'http://localhost:8090'

    useEffect(() => {
    }, []);


    const camposFormulario = [
        {
            tipo: 'input',
            label: 'socialReason',
            placeholder: 'Razão Social',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'cnpj',
            placeholder: 'CNPJ',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'phone',
            placeholder: 'Telefone',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'email',
            placeholder: 'Email',
            tipoCampo: 'text',
        },
        {
            tipo: 'hidden',
            label: 'status',
            tipoCampo: 'text',
            defaultValue: 'ACTIVE',
        },
    ];

    return (
        <div className="tittleCadastrarFabricante">
            <Highbar/>
            <LayoutCadastro titulo="Fabricante" valorUrlAdicionar="fabricante">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/manufacturer`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarFabricante;
