import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarCelula() {
    const backendUrl = 'http://localhost:8090'
    const [dadosCelula, setDadosCelula] = useState([]);
    const [sectors, setSectors] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchValues();
        fetchSectors();
    }, []);

    function fetchValues() {
        fetch(`${backendUrl}/api/mhu/productionCell/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Nome: data.name,
                    Description: data.description,
                    Status: data.status,
                    Tag: data.tag,
                    Sector: data.sector.id
                };

                console.log('XZ', dadosFormatadosAlterar)

                setDadosCelula([dadosFormatadosAlterar]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchSectors() {
        fetch(`${backendUrl}/api/mhu/sector`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosSector = data.map(item => ({
                    Id: item.id,
                    Nome: item.name,
                }));

                setSectors(dadosSector);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'name',
            placeholder: 'Nome',
            tipoCampo: 'text',
            value: dadosCelula && dadosCelula.length > 0 ? dadosCelula[0].Nome : '',
        },
        {
            tipo: 'input',
            label: 'description',
            placeholder: 'Descrição',
            tipoCampo: 'text',
            value: dadosCelula && dadosCelula.length > 0 ? dadosCelula[0].Description : '',
        },
        {
            tipo: 'input',
            label: 'tag',
            placeholder: 'Tag',
            tipoCampo: 'text',
            value: dadosCelula && dadosCelula.length > 0 ? dadosCelula[0].Tag : '',
        },
        {
            tipo: 'select',
            label: 'sectorId',
            placeholder: 'Setor',
            opcoes: sectors.map(sector => ({ value: sector.Id, label: sector.Nome })),
            tipoValue: 'int',
            value: dadosCelula && dadosCelula.length > 0 ? dadosCelula[0].Sector : '',
        },
        {
            tipo: 'select',
            label: 'status',
            placeholder: 'Status',
            opcoes: [
                { value: 0, label: 'Ativo' },
                { value: 1, label: 'Inativo' }
            ],
            value: dadosCelula && dadosCelula.length > 0 && dadosCelula[0].Status === 'ACTIVE' ? 0 : 1,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleAlterarCelula">
            <Highbar/>
            <LayoutCadastro titulo="Celula" valorUrlAdicionar="celula">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/productionCell`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarCelula;
