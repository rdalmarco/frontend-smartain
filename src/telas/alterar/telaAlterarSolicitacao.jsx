import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import { useNavigate } from "react-router-dom";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";
import "../../css/telaAlterarSolicitacao.css";

function TelaAlterarSolicitacao() {
    const backendUrl = 'http://localhost:8090'
    const [machines, setMachines] = useState([]);
    const [symptoms, setSymptoms] = useState([]);
    const [prioritys, setPrioritys] = useState([]);
    const [types, setTypes] = useState([]);
    const [dadosSolicitacao, setDadosSolicitacao] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchValues();
        fetchMachine();
        fetchSymptom();
        fetchPriority();
        fetchTypes();
    }, []);

    function handleGerarOrdem() {
        const dadosOrdem = {
            Maquina : dadosSolicitacao && dadosSolicitacao.length > 0 ? dadosSolicitacao[0].Machine : '',
            Solicitacao : dadosSolicitacao && dadosSolicitacao.length > 0 ? dadosSolicitacao[0].Id : '',
        };

        navigate("/cadastros/ordem/cadastrar", { state: { dadosOrdem } });

    }

    function fetchValues() {
        fetch(`${backendUrl}/api/mpp/serviceSolicitation/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Machine: data.machine.id,
                    Status: data.status,
                    Description: data.description,
                    Priority: data.priority.id,
                    Symptom: data.symptom.id,
                    MaintenanceType: data.maintenanceType.id
                };

                console.log('XZ', dadosFormatadosAlterar)
                setDadosSolicitacao([dadosFormatadosAlterar]);
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

    function fetchSymptom() {
        fetch(`${backendUrl}/api/mpp/serviceSymptom`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosSymptom = data.map(item => ({
                    Id: item.id,
                    Nome: item.name
                }));

                setSymptoms(dadosSymptom);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchPriority() {
        fetch(`${backendUrl}/api/mpp/servicePriority`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosPriority = data.map(item => ({
                    Id: item.id,
                    Nome: item.descritpion
                }));

                setPrioritys(dadosPriority);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchTypes() {
        fetch(`${backendUrl}/api/mpp/maintenanceType`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosType = data.map(item => ({
                    Id: item.id,
                    Nome: item.descritpion
                }));

                setTypes(dadosType);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'select',
            label: 'machineId',
            placeholder: 'Máquina',
            opcoes: machines.map(machine => ({ value: machine.Id, label: machine.Nome })),
            tipoValue: 'int',
            value : dadosSolicitacao && dadosSolicitacao.length > 0 ? dadosSolicitacao[0].Machine : '',
        },
        {
            tipo: 'hidden',
            label: 'status',
            placeholder: 'Status',
            tipoCampo: 'text',
            tipoValue: 'int',
            value : dadosSolicitacao && dadosSolicitacao.length > 0 ? dadosSolicitacao[0].Status : '',
        },
        {
            tipo: 'textarea',
            label: 'description',
            placeholder: 'Descrição',
            tipoCampo: 'text',
            value : dadosSolicitacao && dadosSolicitacao.length > 0 ? dadosSolicitacao[0].Description : '',
        },
        {
            tipo: 'select',
            label: 'priorityId',
            placeholder: 'Prioridade',
            opcoes: prioritys.map(priority => ({ value: priority.Id, label: priority.Nome })),
            tipoValue: 'int',
            value : dadosSolicitacao && dadosSolicitacao.length > 0 ? dadosSolicitacao[0].Priority : '',
        },
        {
            tipo: 'select',
            label: 'symptomId',
            placeholder: 'Sintomas',
            opcoes: symptoms.map(symptom => ({ value: symptom.Id, label: symptom.Nome })),
            tipoValue: 'int',
            value : dadosSolicitacao && dadosSolicitacao.length > 0 ? dadosSolicitacao[0].Symptom : '',
        },
        {
            tipo: 'select',
            label: 'maintenanceTypeId',
            placeholder: 'Tipo de Manutenção',
            opcoes: types.map(type => ({ value: type.Id, label: type.Nome })),
            tipoValue: 'int',
            value : dadosSolicitacao && dadosSolicitacao.length > 0 ? dadosSolicitacao[0].MaintenanceType : '',
        },
        {
            tipo: 'select',
            label: 'status',
            placeholder: 'Status',
            opcoes: [
                { value: 1, label: 'Aberta' },
                { value: 2, label: 'Aprovada' },
                { value: 3, label: 'Negada' },
                { value: 4, label: 'Cancelada' }
            ],
            value: dadosSolicitacao && dadosSolicitacao.length > 0
                ? (dadosSolicitacao[0].Status === 'OPENED' ? 1
                    : dadosSolicitacao[0].Status === 'APPROVED' ? 2
                        : dadosSolicitacao[0].Status === 'DENIED' ? 3
                            : dadosSolicitacao[0].Status === 'CANCELED' ? 4
                                : null)
                : null,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleAlterarSolicitacao">
            <Highbar/>
            <LayoutCadastro titulo="Solicitacao de Serviço" valorUrlAdicionar="solicitacao">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mpp/serviceSolicitation`} />
            </LayoutCadastro>
            <div className="buttonGerar">
                <button onClick={handleGerarOrdem}>Gerar Ordem</button>
            </div>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarSolicitacao;
