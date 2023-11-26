import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarModelo() {
    const backendUrl = 'http://localhost:8090'
    const [modelTypes, setModelTypes] = useState([]);

    useEffect(() => {
        fetchModelType();
    }, []);

    function fetchModelType() {
        fetch(`${backendUrl}/api/mhu/machineModelType`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                // Mapeia os dados recebidos do backend para o formato desejado
                const dadosModelTypes = data.map(item => ({
                    Id: item.id,
                    Nome: item.description
                }));

                // Atualiza o estado usando setDadosUnidades
                setModelTypes(dadosModelTypes);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'model',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'dimensions',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'ModelTypeId',
            opcoes: modelTypes.map(modelType => ({ value: modelType.Id, label: modelType.Nome })),
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleCadastarModelo">
            <Highbar/>
            <LayoutCadastro titulo="Modelo" valorUrlAdicionar="modelo">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarModelo;
