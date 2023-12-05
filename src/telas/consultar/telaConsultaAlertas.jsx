import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, {useEffect, useState} from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaAlertas() {
    const backendUrl = 'http://localhost:8090'
    const [dadosAlertas, setDadosAlertas] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosAlertas);
    }, [dadosAlertas]);

    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/mhu/alert`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Maquina: item.machine ? item.machine.tag : 'Alerta para plano',
                    Plano: item.plan ? item.plan.name : 'Alerta para máquina',
                    Titulo: item.title,
                    Descricao: item.description,
                    Status: item.status
                }));

                setDadosAlertas([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Alertas" valorUrlAdicionar="alerta" dados={dadosAlertas}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaAlertas;