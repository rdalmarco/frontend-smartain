import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarUsuario() {
    const backendUrl = 'http://localhost:8090'
    const [manufacturingUnit, setManufacturingUnit] = useState([]);

    useEffect(() => {
        fetchManufacturingUnit();
    }, []);

    function fetchManufacturingUnit() {
        fetch(`${backendUrl}/api/glo/manufacturingUnit`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                // Mapeia os dados recebidos do backend para o formato desejado
                const dadosManufacturingUnitTypes = data.map(item => ({
                    Id: item.id,
                    Nome: item.tag
                }));
                console.log(dadosManufacturingUnitTypes)
                // Atualiza o estado usando setDadosUnidades
                setManufacturingUnit(dadosManufacturingUnitTypes);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }


    const camposFormulario = [
        {
            tipo: 'input',
            label: 'Nome Completo',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'Email',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'Senha',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'Unidade Fabril',
            opcoes: manufacturingUnit.map(manufacturingUnit => ({value: manufacturingUnit.Id, label: manufacturingUnit.Nome})),
            tipoValue: 'int',
        }
        /*{//Falta fazer userGroup
            tipo: 'select',
            label: 'userGroup',
            opcoes: userGroupTypes.map(userGroup => ({ value: userGroup.Id, label: userGroup.name})),
            tipoValue: 'int',
        },*/
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
