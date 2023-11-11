import {Link} from "react-router-dom";
import Highbar from "../componentes/highbar";
import Bottombar from "../componentes/bottombar";
import React, { useState, useEffect } from 'react';
import LayoutConsulta from "../componentes/layoutConsulta";

function TelaConsultaUnidadesFabris() {
    const backendUrl = 'http://localhost:8090'

    const [dadosUnidades, setDadosUnidades] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosUnidades);
    }, [dadosUnidades]);
    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/glo/manufacturingUnit`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                // Mapeia os dados recebidos do backend para o formato desejado
                const dadosFormatados = data.map(item => ({
                    Nome: item.customer.fantasyName,
                    Cidade: item.city.name,
                    Tipo: item.type.description,
                    Status: item.status,
                }));

                // Atualiza o estado usando setDadosUnidades
                setDadosUnidades([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }


    //Aqui será recebido os dados do backend
     const x = [
        [
            { Nome: 'Fabrica 1', Cidade: 'Rio do Sul', Tipo: '1', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
            { Nome: 'Fabrica 2', Cidade: 'Rio do Sul', Tipo: '3', Status:'Ativa'},
        ],
    ];

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Unidades Fabril" valorUrlAdicionar="unidadefabril" dados={dadosUnidades}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaUnidadesFabris;