import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarUnidadeFabril() {
    const backendUrl = 'http://localhost:8090'
    //Const para armazenar as opções da lista
    const [citys, setCitys] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetchCity();
        fetchType();
    }, []);


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
            defaultValue: 1,
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'tag',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'cityId',
            opcoes: citys.map(city => ({ value: city.Id, label: city.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'address',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'typeId',
            opcoes: types.map(type => ({ value: type.Id, label: type.Nome })),
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
        <div className="tittleCadastrarUnidadeFabril">
            <Highbar/>
            <LayoutCadastro titulo="Unidade Fabril" valorUrlAdicionar="unidadefabril">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/glo/manufacturingUnit`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarUnidadeFabril;
