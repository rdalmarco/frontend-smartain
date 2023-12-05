import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarAlerta() {
    const backendUrl = 'http://localhost:8090'
    const [machines, setMachines] = useState([]);
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetchMachine();
        fetchPlans();
    }, []);


    function fetchMachine() {
        fetch(`${backendUrl}/api/mhu/machine`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosMachine = data.map(item => ({
                    Id: item.id,
                    Nome: item.tag,
                    Garantia: item.warrantyExpDate
                }));
                setMachines(dadosMachine);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchPlans() {
        fetch(`${backendUrl}/api/mpp/maintenancePlan`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosPlans = data.map(item => ({
                    Id: item.id,
                    Nome: item.name,
                }));
                setPlans(dadosPlans);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'select',
            label: 'type',
            placeholder: 'Tipo do Alerta',
            opcoes: [
                { value: 1, label: 'Alerta de Garantia' },
                { value: 2, label: 'Alerta Cadastrado pelo Usuário' }
            ],
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'title',
            placeholder: 'Título do Alerta',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'description',
            placeholder: 'Descrição do Alerta',
            tipoCampo: 'text',
        },
        {
            tipo: 'inputDate',
            label: 'expirationDate',
            placeholder: 'Data de expiração do alerta',
            tipoCampo: 'date',
        },
        {
            tipo: 'select',
            label: 'machineId',
            placeholder: 'Máquina',
            opcoes: machines.map(machine => ({ value: machine.Id, label: machine.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            label: 'plan',
            placeholder: 'Plano de Manutenção',
            opcoes: plans.map(plan => ({ value: plan.Id, label: plan.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'hidden',
            label: 'userId',
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
    ];

    return (
        <div className="tittleCadastrarAlerta">
            <Highbar/>
            <LayoutCadastro titulo="Alerta" valorUrlAdicionar="alerta">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/alert`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarAlerta;
