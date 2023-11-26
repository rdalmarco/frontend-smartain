import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarModelo() {
    const backendUrl = 'http://localhost:8090'
    const [modelTypes, setModelTypes] = useState([]);
    const [manufactures, setManufactures] = useState([]);
    const [dadosModelo, setDadosModelo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchModelType();
        fetchManufacturer();
        fetchValues();
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

    function fetchModelType() {
        fetch(`${backendUrl}/api/mhu/machineModelType`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosModelTypes = data.map(item => ({
                    Id: item.id,
                    Nome: item.description
                }));

                setModelTypes(dadosModelTypes);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchValues() {
        fetch(`${backendUrl}/api/mhu/machineModel/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Manufacturer: data.manufacturer.id,
                    Model: data.model,
                    Dimensions: data.dimensions,
                    MachineModelType: data.machineModelType.id,
                    Status: data.Status,
                };

                console.log('XZ', dadosFormatadosAlterar)
                setDadosModelo([dadosFormatadosAlterar]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'select',
            label: 'manufacturerId',
            opcoes: manufactures.map(manufacturer => ({ value: manufacturer.Id, label: manufacturer.Nome })),
            value : dadosModelo && dadosModelo.length > 0 ? dadosModelo[0].Manufacturer : '',
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'model',
            tipoCampo: 'text',
            value : dadosModelo && dadosModelo.length > 0 ? dadosModelo[0].Model : '',
        },
        {
            tipo: 'input',
            label: 'dimensions',
            tipoCampo: 'text',
            value : dadosModelo && dadosModelo.length > 0 ? dadosModelo[0].Dimensions : '',
        },
        {
            tipo: 'select',
            label: 'machineModelTypeId',
            opcoes: modelTypes.map(modelType => ({ value: modelType.Id, label: modelType.Nome })),
            value : dadosModelo && dadosModelo.length > 0 ? dadosModelo[0].MachineModelType : '',
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            label: 'status',
            tipoCampo: 'text',
            opcoes: [
                { value: 0, label: 'Ativo' },
                { value: 1, label: 'Inativo' }
            ],
            value: dadosModelo && dadosModelo.length > 0 && dadosModelo[0].Status === 'ACTIVE' ? 1 : 0,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleAlterarModelo">
            <Highbar/>
            <LayoutCadastro titulo="Modelo" valorUrlAdicionar="modelo">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/machineModel`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarModelo;
