import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarFabricante() {
    const backendUrl = 'http://localhost:8090'
    const [dadosFabricante, setDadosFabricante] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchValues();
    }, []);

    function fetchValues() {
        fetch(`${backendUrl}/api/mhu/manufacturer/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                // Mapeia os dados recebidos do backend para o formato desejado
                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Nome: data.socialReason,
                    CNPJ: data.cnpj,
                    Phone: data.phone,
                    Email: data.email,
                    Status: data.status,
                };

                console.log('XZ', dadosFormatadosAlterar)
                setDadosFabricante([dadosFormatadosAlterar]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'socialReason',
            tipoCampo: 'text',
            value: dadosFabricante && dadosFabricante.length > 0 ? dadosFabricante[0].Nome : '',
        },
        {
            tipo: 'input',
            label: 'cnpj',
            tipoCampo: 'text',
            value: dadosFabricante && dadosFabricante.length > 0 ? dadosFabricante[0].CNPJ : '',
        },
        {
            tipo: 'input',
            label: 'phone',
            tipoCampo: 'text',
            value: dadosFabricante && dadosFabricante.length > 0 ? dadosFabricante[0].Phone : '',
        },
        {
            tipo: 'input',
            label: 'email',
            tipoCampo: 'text',
            value: dadosFabricante && dadosFabricante.length > 0 ? dadosFabricante[0].Email : '',
        },
        {
            tipo: 'select',
            label: 'status',
            opcoes: [
                { value: 0, label: 'Ativo' },
                { value: 1, label: 'Inativo' }
            ],
            value: dadosFabricante && dadosFabricante.length > 0 && dadosFabricante[0].Status === 'ACTIVE' ? 0 : 1,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleAlterarFabricante">
            <Highbar/>
            <LayoutCadastro titulo="Fabricante" valorUrlAdicionar="fabricante">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/manufacturer`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarFabricante;
