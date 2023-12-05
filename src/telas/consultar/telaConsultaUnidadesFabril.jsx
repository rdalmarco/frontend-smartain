import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, { useState, useEffect } from 'react';
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaUnidadesFabris() {
    const backendUrl = 'http://localhost:8090'

    const [dadosUnidades, setDadosUnidades] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosUnidades);
    }, [dadosUnidades]);

    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/glo/manufacturingUnit`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Nome: item.tag,
                    Cidade: item.city.name,
                    Tipo: item.type.name,
                    Status: item.status === 'ACTIVE' ? 'Ativo' : 'Inativo'
                }));

                setDadosUnidades([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Unidades Fabris" valorUrlAdicionar="unidadefabril" dados={dadosUnidades}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaUnidadesFabris;