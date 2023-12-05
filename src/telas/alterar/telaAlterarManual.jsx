import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarManual() {
    const backendUrl = 'http://localhost:8090'
    const [machines, setMachines] = useState([]);
    const [dadosManual, setDadosManual] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchValues();
        fetchMachine();
    }, []);

    function fetchMachine() {
        fetch(`${backendUrl}/api/mhu/machine`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosMachine = data.map(item => ({
                    Id: item.id,
                    Nome: item.tag,
                }));
                setMachines(dadosMachine);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchValues() {
        fetch(`${backendUrl}/api/mhu/machineManual/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Titulo: data.title,
                    Maquina: data.machine.id,
                    Descricao: data.description,
                    Status: data.status,
                };

                console.log('XZ', dadosFormatadosAlterar)
                setDadosManual([dadosFormatadosAlterar]);
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
            value: dadosManual && dadosManual.length > 0 ? dadosManual[0].Maquina : '',
        },
        {
            tipo: 'input',
            label: 'title',
            placeholder: 'Titulo',
            tipoCampo: 'text',
            value: dadosManual && dadosManual.length > 0 ? dadosManual[0].Titulo : '',
        },
        {
            tipo: 'textarea',
            label: 'description',
            placeholder: 'Descrição do Manual',
            tipoCampo: 'text',
            value: dadosManual && dadosManual.length > 0 ? dadosManual[0].Descricao : '',
        },
        {
            tipo: 'select',
            label: 'status',
            placeholder: 'Status',
            opcoes: [
                { value: 1, label: 'Ativo' },
                { value: 2, label: 'Inativo' }
            ],
            value: dadosManual && dadosManual.length > 0 && dadosManual[0].Status === 'ACTIVE' ? 1 : 2,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleAlterarManual">
            <Highbar/>
            <LayoutCadastro titulo="Manual" valorUrlAdicionar="manual">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/machineManual`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarManual;
