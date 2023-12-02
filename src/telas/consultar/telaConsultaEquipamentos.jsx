import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, {useEffect, useState} from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaEquipamentos() {
    const backendUrl = 'http://localhost:8090'
    const [dadosEquipamentos, setDadosEquipamentos] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosEquipamentos);
    }, [dadosEquipamentos]);

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

                setDadosEquipamentos([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Equipamentos" valorUrlAdicionar="equipamento" dados={dadosEquipamentos}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaEquipamentos;