import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, {useEffect, useState} from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaModelos() {
    const backendUrl = 'http://localhost:8090'
    const [dadosModelos, setDadosModelos] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosModelos);
    }, [dadosModelos]);

    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/mhu/model`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Name: item.model,
                    //Fabricante: item.manufacturer.socialReason,
                    Status: item.status === 'ACTIVE' ? 'Ativo' : 'Inativo'
                }));

                setDadosModelos([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }
    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Modelos" valorUrlAdicionar="modelo" dados={dadosModelos}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaModelos;