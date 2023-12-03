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
        //fetchModelType();
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
        fetch(`${backendUrl}/api/mhu/model/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatadosAlterar = {
                    Id: data.id,
                    //Manufacturer: data.manufacturer.id,
                    Model: data.model,
                    Dimensions: data.dimensions,
                    Tipo: data.domainType,
                    Status: data.Status,
                };

                console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', dadosFormatadosAlterar)
                setDadosModelo([dadosFormatadosAlterar]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'select',
            label: 'manufacturerId',
            placeholder: 'Fabricante',
            opcoes: manufactures.map(manufacturer => ({ value: manufacturer.Id, label: manufacturer.Nome })),
            value : dadosModelo && dadosModelo.length > 0 ? dadosModelo[0].Manufacturer : '',
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'model',
            placeholder: 'Modelo',
            tipoCampo: 'text',
            value : dadosModelo && dadosModelo.length > 0 ? dadosModelo[0].Model : '',
        },
        {
            tipo: 'input',
            label: 'dimensions',
            placeholder: 'Dimensões',
            tipoCampo: 'text',
            value : dadosModelo && dadosModelo.length > 0 ? dadosModelo[0].Dimensions : '',
        },
        {
            tipo: 'select',
            label: 'domainType',
            placeholder: 'Tipo',
            opcoes: [
                { value: 1, label: 'Maquina' },
                { value: 2, label: 'Equipamento' },
                { value: 3, label: 'Componente' }
            ],
            value: dadosModelo && dadosModelo.length > 0
                ? (dadosModelo[0].Tipo === 'MACHINE' ? 1
                    : dadosModelo[0].Tipo === 'COMPONENT' ? 2
                        : dadosModelo[0].Tipo === 'EQUIPAMENT' ? 3
                                : null)
                : null,
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            label: 'status',
            placeholder: 'Status',
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
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/model`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarModelo;
