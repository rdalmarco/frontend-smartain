import {Link} from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, {useEffect, useState} from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaUsuario() {

    const backendUrl = 'http://localhost:8090'

    const [dadosUsers, setDadosUsers] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosUsers);
    }, [dadosUsers]);

    function fetchDataFromBackend() {
        fetch(`${backendUrl}/users`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Grupo: item.userGroup.name,
                    Email: item.email,
                }));

                setDadosUsers([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }


    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Usuários" valorUrlAdicionar="usuario" dados={dadosUsers}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaUsuario;