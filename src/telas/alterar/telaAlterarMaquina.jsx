import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarMaquina() {
    const backendUrl = 'http://localhost:8090'
    const [cells, setCells] = useState([]);
    const [models, setModels] = useState([]);
    const [dadosMachine, setDadosMachine] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchValues();
        fetchCell();
        fetchModel();
    }, []);

    function fetchValues() {
        fetch(`${backendUrl}/api/mhu/machine/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Tag: data.tag,
                    Cell: data.productionCell.id,
                    TechnicalData: data.technicalData,
                    MachineModel: data.machineModel.id,
                    AcquisitionDate: data.acquisitionDate,
                    WarrantyExpDate: data.warrantyExpDate,
                    Status: data.status
                };

                console.log('XZ', dadosFormatadosAlterar)
                setDadosMachine([dadosFormatadosAlterar]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

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
        fetch(`${backendUrl}/api/mhu/machineModel`)
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
            opcoes: cells.map(cell => ({ value: cell.Id, label: cell.Nome })),
            tipoValue: 'int',
            value: dadosMachine && dadosMachine.length > 0 ? dadosMachine[0].Cell : '',
        },
        {
            tipo: 'input',
            label: 'technicalData',
            tipoCampo: 'text',
            value: dadosMachine && dadosMachine.length > 0 ? dadosMachine[0].TechnicalData : '',
        },
        {
            tipo: 'input',
            label: 'tag',
            tipoCampo: 'text',
            value: dadosMachine && dadosMachine.length > 0 ? dadosMachine[0].Tag : '',
        },
        {
            tipo: 'select',
            label: 'machineModelId',
            opcoes: models.map(model => ({ value: model.Id, label: model.Nome })),
            tipoValue: 'int',
            value: dadosMachine && dadosMachine.length > 0 ? dadosMachine[0].MachineModel : '',
        },
        {
            tipo: 'input',
            label: 'acquisitionDate',
            tipoCampo: 'date',
            value: dadosMachine && dadosMachine.length > 0 ? dadosMachine[0].AcquisitionDate : '',
        },
        {
            tipo: 'input',
            label: 'warrantyExpDate',
            tipoCampo: 'date',
            value: dadosMachine && dadosMachine.length > 0 ? dadosMachine[0].WarrantyExpDate : '',
        },
        {
            tipo: 'select',
            label: 'status',
            opcoes: [
                { value: 1, label: 'Ativo' },
                { value: 2, label: 'Inativo' }
            ],
            value: dadosMachine && dadosMachine.length > 0 && dadosMachine[0].Status === 'ACTIVE' ? 1 : 2,
            tipoValue: 'int',
        },
    ];



    return (
        <div className="tittleAlterarMaquina">
            <Highbar/>
            <LayoutCadastro titulo="Maquina" valorUrlAdicionar="maquina">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/machine`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarMaquina;
