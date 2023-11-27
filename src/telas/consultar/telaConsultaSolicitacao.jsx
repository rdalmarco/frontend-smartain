import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, { useState, useEffect } from 'react';
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaSolicitacao() {
    const backendUrl = 'http://localhost:8090'

    const [dadosSolicitacao, setDadosSolicitacao] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosSolicitacao);
    }, [dadosSolicitacao]);

    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/mpp/serviceSolicitation`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Maquina: item.machine.tag,
                    Descrição: item.description,
                    Prioridade: item.priority.descritpion,
                    Status: item.status,
                }));

                setDadosSolicitacao([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Solicitacao de Serviço" valorUrlAdicionar="solicitacao" dados={dadosSolicitacao}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaSolicitacao;