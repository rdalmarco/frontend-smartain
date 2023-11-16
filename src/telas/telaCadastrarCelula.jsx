import LayoutCadastro from "../componentes/layoutCadastro";
import Highbar from "../componentes/highbar";
import Bottombar from "../componentes/bottombar";
import React from "react";
import FormsCadastro from "../componentes/formsCadastro";

function telaCadastrarCelula() {
    const camposFormulario = [
        {
            label: 'Cidade',
            tipo: 'select',
            opcoes: [
                { label: 'Cidade 1', value: '1' },
                { label: 'Cidade 2', value: '2' },
                // Adicione mais opções conforme necessário
            ],
        },
        {
            label: 'Nome',
            tipo: 'input',
            tipoCampo: 'text',
        },
    ];

    return (
        <div className="">
            <Highbar/>
            <FormsCadastro campos={camposFormulario}/>
            <Bottombar/>
        </div>
    );
}

export default telaCadastrarCelula
