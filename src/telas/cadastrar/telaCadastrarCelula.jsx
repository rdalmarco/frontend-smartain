import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarCelula() {
    const backendUrl = 'http://localhost:8090'
    const [sectors, setSectors] = useState([]);

    useEffect(() => {
        fetchSector();
    }, []);


    function fetchSector() {
        fetch(`${backendUrl}/api/mhu/sector`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro ao consultar os dados de setores. ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Dados recebidos do backend:", data);

                const dadosSector = data.map(item => ({
                    Id: item.id,
                    Nome: item.name
                }));

                setSectors(dadosSector);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'name',
            placeholder: 'Nome',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'description',
            placeholder: 'Descrição',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'sectorId',
            placeholder: 'Setor',
            opcoes: sectors.map(sector => ({ value: sector.Id, label: sector.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'tag',
            placeholder: 'Tag',
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
        <div className="tittleCadastrarCelula">
            <Highbar/>
            <LayoutCadastro titulo="Célula" valorUrlAdicionar="celula">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mhu/productionCell`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarCelula;
