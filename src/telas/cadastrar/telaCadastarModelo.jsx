import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarModelo() {
    const backendUrl = 'http://localhost:8090'
    const [modelTypes, setModelTypes] = useState([]);
    const [manufactures, setManufactures] = useState([]);

    useEffect(() => {
        fetchManufacturer();
    }, []);

    function fetchManufacturer() {
        fetch(`${backendUrl}/api/mhu/manufacturer`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosManufactures = data.map(item => ({
                    Id: item.id,
                    Nome: item.socialReason
                }));

                setManufactures(dadosManufactures);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'select',
            label: 'manufacturerId',
            placeholder: 'Fabricante',
            opcoes: manufactures.map(manufacturer => ({ value: manufacturer.Id, label: manufacturer.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'model',
            placeholder: 'Modelo',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'dimensions',
            placeholder: 'Dimensões',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'domainType',
            placeholder: 'Tipo do Modelo',
            opcoes: [
                { value: 1, label: 'Maquina' },
                { value: 2, label: 'Equipamento' },
                { value: 3, label: 'Componente' }
            ],
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
        <div className="tittleCadastarModelo">
            <Highbar/>
            <LayoutCadastro titulo="Modelo" valorUrlAdicionar="modelo">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/model`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarModelo;
