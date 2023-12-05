import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarSetor() {
    const backendUrl = 'http://localhost:8090'
    const [dadosSetor, setDadosSetor] = useState([]);
    const [units, setUnits] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchValuesSetor();
        fetchUnit();
    }, []);

    function fetchValuesSetor() {
        fetch(`${backendUrl}/api/mhu/sector/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Nome: data.name,
                    Unit: data.unit.id,
                    Tag: data.tag,
                    Description: data.description,
                    Status: data.status,
                    CreatedDate: data.createdDate,
                };

                console.log('XZ', dadosFormatadosAlterar)
                setDadosSetor([dadosFormatadosAlterar]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchUnit() {
        fetch(`${backendUrl}/api/glo/manufacturingUnit`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosUnit = data.map(item => ({
                    Id: item.id,
                    Nome: item.tag
                }));

                // Atualiza o estado usando setDadosUnidades
                setUnits(dadosUnit);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'select',
            label: 'unitId',
            placeholder: 'Unidade Fabril',
            opcoes: units.map(unit => ({ value: unit.Id, label: unit.Nome })),
            value : dadosSetor && dadosSetor.length > 0 ? dadosSetor[0].Unit : '',
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'name',
            placeholder: 'Nome',
            tipoCampo: 'text',
            value: dadosSetor && dadosSetor.length > 0 ? dadosSetor[0].Nome : '',
        },
        {
            tipo: 'input',
            label: 'tag',
            placeholder: 'Tag',
            tipoCampo: 'text',
            value: dadosSetor && dadosSetor.length > 0 ? dadosSetor[0].Tag : '',
        },
        {
            tipo: 'input',
            label: 'description',
            placeholder: 'Descrição',
            tipoCampo: 'text',
            value: dadosSetor && dadosSetor.length > 0 ? dadosSetor[0].Description : '',
        },
        {
            tipo: 'select',
            label: 'status',
            placeholder: 'Status',
            opcoes: [
                { value: 0, label: 'Ativo' },
                { value: 1, label: 'Inativo' }
            ],
            value: dadosSetor && dadosSetor.length > 0 && dadosSetor[0].Status === 'ACTIVE' ? 0 : 1,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleCadastrarUnidadeFabril">
            <Highbar/>
            <LayoutCadastro titulo="Setor" valorUrlAdicionar="setor">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/sector`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarSetor;
