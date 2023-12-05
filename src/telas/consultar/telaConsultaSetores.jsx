import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, {useEffect, useState} from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaSetores() {
    const backendUrl = 'http://localhost:8090'
    const [dadosSetores, setDadosSetores] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosSetores);
    }, [dadosSetores]);

    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/mhu/sector`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Nome: item.name,
                    Tipo: item.description,
                    Status: item.status === 'ACTIVE' ? 'Ativo' : 'Inativo'
                }));

                setDadosSetores([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Setores" valorUrlAdicionar="setor" dados={dadosSetores}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaSetores;