import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarOrdem() {
    const backendUrl = 'http://localhost:8090'
    const [machines, setMachines] = useState([]);
    const [causes, setCauses] = useState([]);
    const [prioritys, setPrioritys] = useState([]);
    const [types, setTypes] = useState([]);
    const [dadosOrdem, setDadosOrdem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchValues();
        fetchMachine();
        fetchCause();
        fetchPriority();
        fetchTypes();
    }, []);

    function fetchValues() {
        fetch(`${backendUrl}/api/mpp/serviceOrder/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Maquina: data.machine.id,
                    Prioridade: data.priority.id,
                    UsuarioAbertura: data.openingUser.name,
                    TipoManutencao: data.maintenanceType.id,
                    TempoEstimado: data.estimatedDuration,
                    Causa: data.serviceCause.id,
                    Solicitacao: data.serviceSolicitation.id,
                    Status: data.status,
                };

                console.log('Dados Formatados', dadosFormatadosAlterar)
                setDadosOrdem([dadosFormatadosAlterar]);
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

    function fetchCause() {
        fetch(`${backendUrl}/api/mpp/serviceCause`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosCause = data.map(item => ({
                    Id: item.id,
                    Nome: item.name
                }));

                setCauses(dadosCause);
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
            opcoes: machines.map(machine => ({ value: machine.Id, label: machine.Nome })),
            tipoValue: 'int',
            value : dadosOrdem && dadosOrdem.length > 0 ? dadosOrdem[0].Maquina : '',
        },
        {
            tipo: 'input',
            label: 'Nome Usuario Responsável',
            tipoCampo: 'text',
            tipoValue: 'int',
            value : dadosOrdem && dadosOrdem.length > 0 ? dadosOrdem[0].UsuarioAbertura : '',
            readOnly : true,
        },
        {
            tipo: 'select',
            label: 'priorityId',
            opcoes: prioritys.map(priority => ({ value: priority.Id, label: priority.Nome })),
            value : dadosOrdem && dadosOrdem.length > 0 ? dadosOrdem[0].Prioridade : '',
            tipoValue: 'int',
        },
        {
            tipo: 'hidden',
            label: 'generationTypeId',
            tipoCampo: 'text',
            value: 1,
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'estimatedDuration',
            tipoCampo: 'time',
            value : dadosOrdem && dadosOrdem.length > 0 ? dadosOrdem[0].TempoEstimado : '',
        },
        {
            tipo: 'select',
            label: 'maintenanceTypeId',
            opcoes: types.map(type => ({ value: type.Id, label: type.Nome })),
            tipoValue: 'int',
            value : dadosOrdem && dadosOrdem.length > 0 ? dadosOrdem[0].TipoManutencao : '',
        },
        {
            tipo: 'select',
            label: 'serviceCauseId',
            opcoes: causes.map(cause => ({ value: cause.Id, label: cause.Nome })),
            tipoValue: 'int',
            value : dadosOrdem && dadosOrdem.length > 0 ? dadosOrdem[0].Causa : '',
        },
        {
            tipo: 'select',
            label: 'solicitationId',
            opcoes: dadosOrdem && dadosOrdem.length > 0
                ? [{ value: dadosOrdem[0].Solicitacao, label: dadosOrdem[0].Solicitacao }]
                : [{ value: 0, label: 'Ordem gerada manualmente'}],
            tipoValue: 'int',
            value: dadosOrdem && dadosOrdem.length > 0 ? dadosOrdem[0].Solicitacao : '0'
        },
        {
            tipo: 'select',
            label: 'status',
            opcoes: [
                { value: 1, label: 'Nao Iniciada' },
                { value: 2, label: 'Agendada' },
                { value: 3, label: 'Em Progresso' },
                { value: 4, label: 'Suspensa' },
                { value: 5, label: 'Completa' },
            ],
            value: dadosOrdem && dadosOrdem.length > 0
                ? (dadosOrdem[0].Status === 'NOT_STARTED' ? 1
                    : dadosOrdem[0].Status === 'SCHEDULED' ? 2
                        : dadosOrdem[0].Status === 'IN_PROGRESS' ? 3
                            : dadosOrdem[0].Status === 'SUSPENDED' ? 4
                                : dadosOrdem[0].Status === 'COMPLETED' ? 5
                                  : null)
                : null,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleAlterarOrdem">
            <Highbar/>
            <LayoutCadastro titulo="Ordem de Manutenção" valorUrlAdicionar="ordem">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mpp/serviceOrder`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarOrdem;
