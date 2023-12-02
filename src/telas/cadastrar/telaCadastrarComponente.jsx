import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarComponente() {
    const backendUrl = 'http://localhost:8090'
    const [models, setModels] = useState([]);
    const [machines, setMachines] = useState([]);

    useEffect(() => {
        fetchModel();
        fetchMachine();
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

    function fetchModel() {
        fetch(`${backendUrl}/api/mhu/model`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosModel = data.map(item => ({
                    Id: item.id,
                    Nome: item.name
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
        },
        {
            tipo: 'input',
            label: 'technicalData',
            placeholder: 'Descrição Técnica',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'modelId',
            placeholder: 'Modelo',
            opcoes: models.map(model => ({ value: model.Id, label: model.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            label: 'machineId',
            placeholder: 'Máquina',
            opcoes: machines.map(machine => ({ value: machine.Id, label: machine.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'hidden',
            label: 'status',
            tipoCampo: 'text',
            defaultValue: 'ACTIVE',
        },
    ];

    return (
        <div className="tittleCadastrarComponente">
            <Highbar/>
            <LayoutCadastro titulo="Componente" valorUrlAdicionar="componente">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/component`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarComponente;
