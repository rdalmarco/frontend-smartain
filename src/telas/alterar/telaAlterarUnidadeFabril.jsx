import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarUnidadeFabril() {
    const backendUrl = 'http://localhost:8090'
    //Const para armazenar as opções da lista
    const [citys, setCitys] = useState([]);
    const [types, setTypes] = useState([]);
    const [dadosUnidade, setDadosUnidade] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchValues();
        fetchCity();
        fetchType();
    }, []);

    function fetchValues() {
        fetch(`${backendUrl}/api/glo/manufacturingUnit/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                // Mapeia os dados recebidos do backend para o formato desejado
                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Nome: data.tag,
                    Cidade: data.city.id.cityId,
                    Tipo: data.type.id,
                    Status: data.status,
                    Address: data.address,
                };

                console.log('XZ', dadosFormatadosAlterar)
                // Atualiza o estado usando setDadosUnidades
                setDadosUnidade([dadosFormatadosAlterar]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchCity() {
        fetch(`${backendUrl}/api/glo/city`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);


                // Mapeia os dados recebidos do backend para o formato desejado
                const dadosCity = data.map(item => ({
                    Id: item.id.cityId,
                    Nome: item.name
                }));

                // Atualiza o estado usando setDadosUnidades
                setCitys(dadosCity);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchType() {
        fetch(`${backendUrl}/api/mhu/unitType`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);


                // Mapeia os dados recebidos do backend para o formato desejado
                const dadosType = data.map(item => ({
                    Id: item.id,
                    Nome: item.name
                }));

                // Atualiza o estado usando setDadosUnidades
                setTypes(dadosType);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'hidden',
            label: 'customerId',
            tipoCampo: 'text',
            value: 1,
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'tag',
            tipoCampo: 'text',
            value: dadosUnidade && dadosUnidade.length > 0 ? dadosUnidade[0].Nome : '',
        },
        {
            tipo: 'select',
            label: 'cityId',
            opcoes: citys.map(city => ({ value: city.Id, label: city.Nome })),
            value : dadosUnidade && dadosUnidade.length > 0 ? dadosUnidade[0].Cidade : '',
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'address',
            tipoCampo: 'text',
            value: dadosUnidade && dadosUnidade.length > 0 ? dadosUnidade[0].Address : '',
        },
        {
            tipo: 'select',
            label: 'typeId',
            opcoes: types.map(type => ({ value: type.Id, label: type.Nome })),
            value : dadosUnidade && dadosUnidade.length > 0 ? dadosUnidade[0].Tipo : '',
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            label: 'status',
            opcoes: [
                { value: 0, label: 'Ativo' },
                { value: 1, label: 'Inativo' }
            ],
            value: dadosUnidade && dadosUnidade.length > 0 && dadosUnidade[0].Status === 'ACTIVE' ? 0 : 1,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleCadastrarUnidadeFabril">
            <Highbar/>
            <LayoutCadastro titulo="Unidade Fabril" valorUrlAdicionar="unidadefabril">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/glo/manufacturingUnit`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarUnidadeFabril;
