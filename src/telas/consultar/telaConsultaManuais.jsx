import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, {useEffect, useState} from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaManuais() {
    const backendUrl = 'http://localhost:8090'
    const [dadosManuais, setDadosManuais] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosManuais);
    }, [dadosManuais]);

    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/mhu/machineManual`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Maquina: item.machine.id,
                    Titulo: item.title,
                    Descricao: item.description,
                    Status: item.status === 'ACTIVE' ? 'Ativo' : 'Inativo'
                }));

                setDadosManuais([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Manuais" valorUrlAdicionar="manual" dados={dadosManuais}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaManuais;