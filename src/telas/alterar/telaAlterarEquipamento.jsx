import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarEquipamento() {
    const backendUrl = 'http://localhost:8090'
    const [models, setModels] = useState([]);
    const [machines, setMachines] = useState([]);
    const [dadosEquipamento, setDadosEquipamento] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchValues();
        fetchModel();
        fetchMachine();
    }, []);

    function fetchValues() {
        fetch(`${backendUrl}/api/mhu/equipment/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Nome: data.name,
                    Descrição: data.technicalData,
                    Model : data.model.id,
                    Maquina : data.machine.id,
                    Status: data.status,
                };

                console.log('XZ', dadosFormatadosAlterar)
                setDadosEquipamento([dadosFormatadosAlterar]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchMachine() {
        fetch(`${backendUrl}/api/mhu/machine`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosMachine = data.map(item => ({
                    Id: item.id,
                    Nome: item.tag
                }));

                setMachines(dadosMachine);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchModel() {
        fetch(`${backendUrl}/api/mhu/model`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosModel = data.map(item => ({
                    Id: item.id,
                    Nome: item.model
                }));
                setModels(dadosModel);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'name',
            placeholder: 'Nome',
            tipoCampo: 'text',
            value : dadosEquipamento && dadosEquipamento.length > 0 ? dadosEquipamento[0].Nome : '',
        },
        {
            tipo: 'input',
            label: 'technicalData',
            placeholder: 'Descrição Técnica',
            tipoCampo: 'text',
            value : dadosEquipamento && dadosEquipamento.length > 0 ? dadosEquipamento[0].Descrição : '',
        },
        {
            tipo: 'select',
            label: 'equipmentModelId',
            placeholder: 'Modelo',
            opcoes: models.map(model => ({ value: model.Id, label: model.Nome })),
            tipoValue: 'int',
            value : dadosEquipamento && dadosEquipamento.length > 0 ? dadosEquipamento[0].Model : '',
        },
        {
            tipo: 'select',
            label: 'machineId',
            placeholder: 'Máquina',
            opcoes: machines.map(machine => ({ value: machine.Id, label: machine.Nome })),
            tipoValue: 'int',
            value : dadosEquipamento && dadosEquipamento.length > 0 ? dadosEquipamento[0].Maquina : '',
        },
        {
            tipo: 'select',
            label: 'status',
            placeholder: 'Status',
            opcoes: [
                { value: 1, label: 'Ativo' },
                { value: 2, label: 'Inativo' }
            ],
            value: dadosEquipamento && dadosEquipamento.length > 0 && dadosEquipamento[0].Status === 'ACTIVE' ? 1 : 2,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleAlterarEquipamento">
            <Highbar/>
            <LayoutCadastro titulo="Equipamento" valorUrlAdicionar="equipamento">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/equipment`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarEquipamento;
