import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, {useEffect, useState} from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaPlanos() {
    const backendUrl = 'http://localhost:8090'
    const [dadosPlanos, setDadosPlanos] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosPlanos);
    }, [dadosPlanos]);

    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/mpp/maintenancePlan`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Nome: item.name,
                    Unidade: item.unit.tag,
                    Usuario: item.user.name,
                    Abertura: item.createdDate,
                    Status: item.status,
                }));

                setDadosPlanos([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Planos de Manutenção" valorUrlAdicionar="plano" dados={dadosPlanos}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaPlanos;