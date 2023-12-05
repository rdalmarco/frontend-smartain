import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarManual() {
    const backendUrl = 'http://localhost:8090'
    const [machines, setMachines] = useState([]);

    useEffect(() => {
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
                    Garantia: item.warrantyExpDate
                }));
                setMachines(dadosMachine);
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
            tipo: 'input',
            label: 'title',
            placeholder: 'Titulo',
            tipoCampo: 'text',
        },
        {
            tipo: 'textarea',
            label: 'description',
            placeholder: 'Descrição do Manual',
            tipoCampo: 'text',
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
        <div className="tittleCadastrarManual">
            <Highbar/>
            <LayoutCadastro titulo="Manual" valorUrlAdicionar="manual">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/machineManual`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarManual;
