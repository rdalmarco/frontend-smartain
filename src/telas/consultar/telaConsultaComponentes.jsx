import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, {useEffect, useState} from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaEquipamentos() {
    const backendUrl = 'http://localhost:8090'
    const [dadosComponentes, setDadosComponentes] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosComponentes);
    }, [dadosComponentes]);

    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/mhu/equipment`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Nome: item.name,
                    Descrição: item.technicalData,
                    Status: item.status,
                }));

                setDadosComponentes([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Componentes" valorUrlAdicionar="componente" dados={dadosComponentes}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaEquipamentos;