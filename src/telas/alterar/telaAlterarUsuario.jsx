import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarUsuario() {
    const backendUrl = 'http://localhost:8090'
    const [dadosUser, setDadosUser] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchValuesUsuario();
    }, []);

    function fetchValuesUsuario() {
        console.log('ID"', {id})

        fetch(`${backendUrl}/users/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Nome: data.name,
                    Login: data.login,
                    Email: data.email,
                    Status: data.status,
                    //Senha: ususenha,?
                };

                console.log('XZ', dadosFormatadosAlterar)
                setDadosUser([dadosFormatadosAlterar]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'name',
            tipoCampo: 'text',
            value: dadosUser && dadosUser.length > 0 ? dadosUser[0].Nome : '',
        },
        {
            tipo: 'input',
            label: 'login',
            tipoCampo: 'text',
            value: dadosUser && dadosUser.length > 0 ? dadosUser[0].Login : '',
        },
        {
            tipo: 'input',
            label: 'password',
            tipoCampo: 'text',
            value: '',
            //value: dadosUser && dadosUser.length > 0 ? dadosUser[0].Password : '',
        },
        {
            tipo: 'hidden',
            label: 'groupId',
            tipoCampo: 'text',
            value: '1',
            tipoValue: 'int',
        },
        {
            tipo: 'input',
            label: 'email',
            tipoCampo: 'text',
            value: dadosUser && dadosUser.length > 0 ? dadosUser[0].Email : '',
        },
        {
            tipo: 'select',
            label: 'status',
            opcoes: [
                { value: 0, label: 'Ativo' },
                { value: 1, label: 'Inativo' }
            ],
            value: dadosUser && dadosUser.length > 0 && dadosUser[0].Status === 'ACTIVE' ? 0 : 1,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleAlterarUsuario">
            <Highbar/>
            <LayoutCadastro titulo="Usuário" valorUrlAdicionar="usuario">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/users`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarUsuario;
