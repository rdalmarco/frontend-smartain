import React, { useState, useEffect } from "react";
import LayoutCadastro from "../componentes/layoutCadastro";
import Highbar from "../componentes/highbar";
import Bottombar from "../componentes/bottombar";
import FormsCadastro from "../componentes/formsCadastro";

function TelaCadastrarSetor() {
    const backendUrl = 'http://localhost:8090'
    const [units, setUnits] = useState([]);

    useEffect(() => {
        fetchUnit();
    }, []);


    function fetchUnit() {
        fetch(`${backendUrl}/api/glo/manufacturingUnit`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);


                // Mapeia os dados recebidos do backend para o formato desejado
                const dadosUnit = data.map(item => ({
                    Id: item.id,
                    Nome: item.tag
                }));

                // Atualiza o estado usando setDadosUnidades
                setUnits(dadosUnit);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'select',
            label: 'unit',
            opcoes: units.map(unit => ({ value: unit.Id, label: unit.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'name',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'tag',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'description',
            tipoCampo: 'text',
        },
        {
            tipo: 'hidden',
            label: 'status',
            tipoCampo: 'text',
            defaultValue: 'ACTIVE',
        },
        {
            tipo: 'hidden',
            label: 'createdDate',
            tipoCampo: 'text',
            defaultValue: '17/11/2023',
        },
    ];

    return (
        <div className="tittleCadastrarSetor">
            <Highbar/>
            <LayoutCadastro titulo="Setor" valorUrlAdicionar="setor">
             <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/sector`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarSetor;
