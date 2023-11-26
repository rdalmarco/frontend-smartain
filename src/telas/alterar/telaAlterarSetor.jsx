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
                    Tag: data.tag,
                    Description: data.description,
                    Status: data.status,
                    CreatedDate: data.createdDate,
                };

                console.log('XZ', dadosFormatadosAlterar)
                // Atualiza o estado usando setDadosUnidades
                setDadosSetor([dadosFormatadosAlterar]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchUnit() {
        fetch(`${backendUrl}/api/glo/manufacturingUnit`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);


                // Mapeia os dados recebidos do backend para o formato desejado
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
            label: 'unit',
            opcoes: units.map(unit => ({ value: unit.Id, label: unit.Nome })),
            value: dadosSetor && dadosSetor.length > 0 && dadosSetor[0].Status,
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'name',
            tipoCampo: 'text',
            value: dadosSetor && dadosSetor.length > 0 ? dadosSetor[0].Nome : '',
        },
        {
            tipo: 'input',
            label: 'tag',
            tipoCampo: 'text',
            value: dadosSetor && dadosSetor.length > 0 ? dadosSetor[0].Tag : '',
        },
        {
            tipo: 'input',
            label: 'description',
            tipoCampo: 'text',
            value: dadosSetor && dadosSetor.length > 0 ? dadosSetor[0].Description : '',
        },
        {
            tipo: 'select',
            label: 'status',
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
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/glo/manufacturingUnit`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarSetor;
