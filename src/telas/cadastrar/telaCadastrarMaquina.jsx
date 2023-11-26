import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarMaquina() {
    const backendUrl = 'http://localhost:8090'
    //Const para armazenar as opções da lista
    const [sectors, setSectors] = useState([]);

    useEffect(() => {
        fetchSector();
    }, []);
    
    function fetchSector() {
        fetch(`${backendUrl}/api/mhu/sector`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                // Mapeia os dados recebidos do backend para o formato desejado
                const dadosSector = data.map(item => ({
                    Id: item.id.cityId,
                    Nome: item.name
                }));

                // Atualiza o estado usando setDadosUnidades
                setSectors(dadosSector);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'technicalData',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            label: 'sectorId',
            opcoes: sectors.map(sector => ({ value: sector.Id, label: sector.Nome })),
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
        <div className="tittleCadastrarMaquina">
            <Highbar/>
            <LayoutCadastro titulo="Maquina" valorUrlAdicionar="maquina">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/glo/`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarMaquina;