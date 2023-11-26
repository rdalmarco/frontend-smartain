import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, {useEffect, useState} from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaCelulas() {
    const backendUrl = 'http://localhost:8090'
    const [dadosCelulas, setDadosCelulas] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosCelulas);
    }, [dadosCelulas]);

    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/mhu/productioncell`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Name: item.model,
                    Fabricante: item.manufacturer.socialReason,
                    Status: item.status,
                }));

                setDadosCelulas([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Celulas" valorUrlAdicionar="celula" dados={dadosCelulas}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaCelulas;