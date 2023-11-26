import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, {useEffect, useState} from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaFabricantes() {
    const backendUrl = 'http://localhost:8090'

    const [dadosFabricantes, setDadosFabricantes] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/mhu/supplier`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Nome: item.socialReason,
                    CNPJ: item.cnpj,
                    Status: item.status,
                }));

                // Atualiza o estado usando setDadosUnidades
                setDadosFabricantes([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Fabricantes" valorUrlAdicionar="fabricante" dados={dadosFabricantes}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaFabricantes;