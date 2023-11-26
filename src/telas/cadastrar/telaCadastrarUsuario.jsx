import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarUsuario() {
    const backendUrl = 'http://localhost:8090'
    const [modelTypes, setModelTypes] = useState([]);

    useEffect(() => {
        fetchModelType();
    }, []);

    function fetchModelType() {
        fetch(`${backendUrl}/api/mhu/sector`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                // Mapeia os dados recebidos do backend para o formato desejado
                const dadosModelTypes = data.map(item => ({
                    Id: item.id.cityId,
                    Nome: item.name
                }));

                // Atualiza o estado usando setDadosUnidades
                setModelTypes(dadosModelTypes);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'usunome',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'ususenha',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'usuemail',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: '',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'dimensions',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'cityId',
            opcoes: modelTypes.map(modelType => ({ value: modelType.Id, label: modelType.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: '',
            tipoCampo: 'text',
        },
    ];

    return (
        <div className="tittleCadastarUsuario">
            <Highbar/>
            <LayoutCadastro titulo="Usuário" valorUrlAdicionar="user">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarUsuario;
