import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarAlerta() {
    const backendUrl = 'http://localhost:8090'
    const [machines, setMachines] = useState([]);
    const [plans, setPlans] = useState([]);
    const [dadosAlert, setDadosAlert] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchValues();
        fetchMachine();
        fetchPlans();
    }, []);

    function fetchValues() {
        fetch(`${backendUrl}/api/mhu/alert/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Tipo: data.type,
                    Titulo: data.title,
                    Descricao: data.description,
                    Usuario: data.createdUser ? data.createdUser.id : null,
                    Criacao: data.createdDate,
                    Expiracao: data.expirationDate,
                    Maquina: data.machine ? data.machine.id : null,
                    Plano: data.plan ? data.plan.id : null,
                    Status: data.status
                };

                console.log('XZ', dadosFormatadosAlterar)
                setDadosAlert([dadosFormatadosAlterar]);
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
            value: dadosAlert && dadosAlert.length > 0 && dadosAlert[0].Tipo === 'ALERT_BY_WARRANTY' ? 1 : 2,
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'title',
            placeholder: 'Título do Alerta',
            value: dadosAlert && dadosAlert.length > 0 ? dadosAlert[0].Titulo : '',
            tipoCampo: 'text',
        },
        {
            tipo: 'textarea',
            label: 'description',
            placeholder: 'Descrição do Alerta',
            value: dadosAlert && dadosAlert.length > 0 ? dadosAlert[0].Descricao : '',
            tipoCampo: 'text',
        },
        {
            tipo: 'inputDate',
            label: 'expirationDate',
            placeholder: 'Data de expiração do alerta',
            value: dadosAlert && dadosAlert.length > 0 ? dadosAlert[0].Expiracao : '',
            tipoCampo: 'date',
        },
        {
            tipo: 'select',
            label: 'machineId',
            placeholder: 'Máquina',
            opcoes: machines.map(machine => ({ value: machine.Id, label: machine.Nome })),
            value: dadosAlert && dadosAlert.length > 0 ? dadosAlert[0].Maquina : '',
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            label: 'plan',
            placeholder: 'Plano de Manutenção',
            opcoes: plans.map(plan => ({ value: plan.Id, label: plan.Nome })),
            value: dadosAlert && dadosAlert.length > 0 ? dadosAlert[0].Plano : '',
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            label: 'userId',
            placeholder: 'Usuário de Criação',
            opcoes: dadosAlert && dadosAlert.length > 0
                ? (dadosAlert[0].Usuario
                    ? [{ value: dadosAlert[0].Usuario, label: dadosAlert[0].Usuario }]
                    : [{ value: 0, label: 'Criada Automaticamente' }])
                : [{ value: 0, label: 'Criada Automaticamente' }],
            tipoValue: 'int',
            value: dadosAlert && dadosAlert.length > 0 ? dadosAlert[0].Solicitacao : '0',
        },
        {
            tipo: 'select',
            label: 'status',
            placeholder: 'Status',
            opcoes: [
                { value: 1, label: 'Pendente' },
                { value: 2, label: 'Atendido' }
            ],
            value: dadosAlert && dadosAlert.length > 0 && dadosAlert[0].Status === 'PENDING' ? 1 : 2,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleAlterarAlerta">
            <Highbar/>
            <LayoutCadastro titulo="Alerta" valorUrlAdicionar="alerta">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/alert`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarAlerta;
