import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";
import { useLocation } from "react-router-dom";

function TelaCadastrarOrdem() {
    const backendUrl = 'http://localhost:8090'
    const [machines, setMachines] = useState([]);
    const [causes, setCauses] = useState([]);
    const [prioritys, setPrioritys] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetchMachine();
        fetchCause();
        fetchPriority();
        fetchTypes();
    }, []);

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

    const location = useLocation();
    const dadosOrdem = location.state && location.state.dadosOrdem;
    console.log(dadosOrdem)

    const camposFormulario = [
        {
            tipo: 'select',
            label: 'machineId',
            placeholder: 'Máquina',
            opcoes: machines.map(machine => ({ value: machine.Id, label: machine.Nome })),
            tipoValue: 'int',
            defaultValue: dadosOrdem && dadosOrdem.Maquina ? dadosOrdem.Maquina : ''
        },
        {
            tipo: 'hidden',
            label: 'userId',
            tipoCampo: 'text',
            defaultValue: 1,
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            label: 'priorityId',
            placeholder: 'Prioridade',
            opcoes: prioritys.map(priority => ({ value: priority.Id, label: priority.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'hidden',
            label: 'generationTypeId',
            tipoCampo: 'text',
            defaultValue: 1,
            tipoValue: 'int',
        },
        {
            tipo: 'hidden',
            label: 'status',
            tipoCampo: 'text',
            defaultValue: 1,
            tipoValue: 'int',
        },
        {
            tipo: 'inputTime',
            placeholder: 'Duração Estimada (HH:MM)',
            label: 'estimatedDuration',
            tipoCampo: 'time',
        },
        {
            tipo: 'select',
            label: 'maintenanceTypeId',
            placeholder: 'Tipo de Manutenção',
            opcoes: types.map(type => ({ value: type.Id, label: type.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            label: 'serviceCauseId',
            placeholder: 'Causa',
            opcoes: causes.map(cause => ({ value: cause.Id, label: cause.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            label: 'solicitationId',
            placeholder: 'Código da Solicitação',
            opcoes: dadosOrdem && dadosOrdem.Solicitacao
                ? [{ value: dadosOrdem.Solicitacao, label: dadosOrdem.Solicitacao }]
                : [],
            tipoValue: 'int',
            defaultValue: dadosOrdem && dadosOrdem.Solicitacao ? dadosOrdem.Solicitacao : ''
        },
    ];

    return (
        <div className="tittleCadastrarOrdem">
            <Highbar/>
            <LayoutCadastro titulo="Ordem de Serviço" valorUrlAdicionar="ordem">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mpp/serviceOrder`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarOrdem;
