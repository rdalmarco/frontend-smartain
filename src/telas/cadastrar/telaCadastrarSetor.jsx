import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

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


                const dadosUnit = data.map(item => ({
                    Id: item.id,
                    Nome: item.tag
                }));

                setUnits(dadosUnit);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'select',
            label: 'unitId',
            placeholder: 'Unidade Fabril',
            opcoes: units.map(unit => ({ value: unit.Id, label: unit.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'name',
            placeholder: 'Nome',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'tag',
            placeholder: 'Tag',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'description',
            placeholder: 'Descrição',
            tipoCampo: 'text',
        },
        {
            tipo: 'hidden',
            label: 'status',
            tipoCampo: 'text',
            defaultValue: 'ACTIVE',
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
