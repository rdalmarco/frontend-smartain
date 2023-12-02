import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarSolicitacao() {
    const backendUrl = 'http://localhost:8090'
    const [machines, setMachines] = useState([]);
    const [symptoms, setSymptoms] = useState([]);
    const [prioritys, setPrioritys] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetchMachine();
        fetchSymptom();
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
        },
        {
            tipo: 'hidden',
            label: 'responsibleUserId',
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
            tipo: 'textarea',
            label: 'description',
            placeholder: 'Descrição',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'priorityId',
            placeholder: 'Prioridade',
            opcoes: prioritys.map(priority => ({ value: priority.Id, label: priority.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            label: 'symptomId',
            placeholder: 'Sintoma',
            opcoes: symptoms.map(symptom => ({ value: symptom.Id, label: symptom.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            label: 'maintenanceTypeId',
            placeholder: 'Tipo de Manutenção',
            opcoes: types.map(type => ({ value: type.Id, label: type.Nome })),
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleCadastrarSolicitacao">
            <Highbar/>
            <LayoutCadastro titulo="Solicitação de Serviço" valorUrlAdicionar="solicitacao">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mpp/serviceSolicitation`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarSolicitacao;
