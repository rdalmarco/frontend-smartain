import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarUsuario() {
    const backendUrl = 'http://localhost:8090'
    //Const para armazenar as opções da lista
    const [dadosUsuario, setDadosUsuario] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchValues();
    }, []);

    function fetchValues() {
        fetch(`${backendUrl}/api/glo/manufacturingUnit/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                // Mapeia os dados recebidos do backend para o formato desejado
                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Nome: data.tag,
                    Login: data.login,
                    Email: data.email,
                    //Senha: ususenha,?
                };

                console.log('XZ', dadosFormatadosAlterar)
                // Atualiza o estado usando setDadosUnidades
                setDadosUsuario([dadosFormatadosAlterar]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'name',
            tipoCampo: 'text',
            value: dadosUsuario && dadosUsuario.length > 0 ? dadosUsuario[0].name : '',
        },
        {
            tipo: 'input',
            label: 'login',
            tipoCampo: 'text',
            value: dadosUsuario && dadosUsuario.length > 0 ? dadosUsuario[0].login : '',
        },
        {
            tipo: 'input',
            label: 'email',
            tipoCampo: 'text',
            value: dadosUsuario && dadosUsuario.length > 0 ? dadosUsuario[0].email : '',
        },
        {
            tipo: 'select',
            label: 'status',
            opcoes: [
                { value: 0, label: 'Ativo' },
                { value: 1, label: 'Inativo' }
            ],
            value: dadosUsuario && dadosUsuario.length > 0 && dadosUsuario[0].Status === 'ACTIVE' ? 0 : 1,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleAlterarUsuario">
            <Highbar/>
            <LayoutCadastro titulo="Usuário" valorUrlAdicionar="usuario">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarUsuario;
