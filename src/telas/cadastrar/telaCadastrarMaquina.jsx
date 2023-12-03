import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarMaquina() {
    const backendUrl = 'http://localhost:8090'
    const [cells, setCells] = useState([]);
    const [models, setModels] = useState([]);

    useEffect(() => {
        fetchCell();
        fetchModel();
    }, []);
    
    function fetchCell() {
        fetch(`${backendUrl}/api/mhu/productionCell`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosCell = data.map(item => ({
                    Id: item.id,
                    Nome: item.name
                }));

                setCells(dadosCell);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchModel() {
        fetch(`${backendUrl}/api/mhu/model`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosModels = data.map(item => ({
                    Id: item.id,
                    Nome: item.model
                }));

                setModels(dadosModels);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'select',
            label: 'productionCellId',
            placeholder: 'Célula de Produção',
            opcoes: cells.map(cell => ({ value: cell.Id, label: cell.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'technicalData',
            placeholder: 'Descrição Técnica',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'tag',
            placeholder: 'Tag',
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
            tipo: 'inputDate',
            label: 'acquisitionDate',
            placeholder: 'Data de Aquisição',
            tipoCampo: 'date',
        },
        {
            tipo: 'inputDate',
            label: 'warrantyExpDate',
            placeholder: 'Data de Fim da Garantia',
            tipoCampo: 'date',
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
        <div className="tittleCadastrarMaquina">
            <Highbar/>
            <LayoutCadastro titulo="Maquina" valorUrlAdicionar="maquina">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/machine`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarMaquina;
