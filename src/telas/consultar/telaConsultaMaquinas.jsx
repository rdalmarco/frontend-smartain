import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, {useEffect, useState} from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaMaquinas() {
    const backendUrl = 'http://localhost:8090'
    const [dadosMaquinas, setDadosMaquinas] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosMaquinas);
    }, [dadosMaquinas]);

    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/mhu/machine`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Tag: item.tag,
                    Modelo: item.machineModel.model,
                    Status: item.status,
                }));

                setDadosMaquinas([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Maquinas" valorUrlAdicionar="maquina" dados={dadosMaquinas}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaMaquinas;