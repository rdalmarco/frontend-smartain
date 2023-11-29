import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";
import FormsAlterar from "../../componentes/formsAlterar";
import {useParams} from "react-router-dom";

function TelaAlterarPlano() {
    const backendUrl = 'http://localhost:8090'
    const [units, setUnits] = useState([]);
    const [users, setUsers] = useState([]);
    const [dadosPlano, setDadosPlano] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchValues();
        fetchUnit();
        fetchUsers();
    }, []);

    function fetchUnit() {
        fetch(`${backendUrl}/api/glo/manufacturingUnit`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);


                const dadosUnit = data.map(item => ({
                    Id: item.id,
                    Nome: item.tag
                }));

                setUnits(dadosUnit);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchUsers() {
        fetch(`${backendUrl}/users`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);


                const dadosUser = data.map(item => ({
                    Id: item.id,
                    Nome: item.name
                }));

                setUsers(dadosUser);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchValues() {
        fetch(`${backendUrl}/api/mpp/maintenancePlan/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosFormatadosAlterar = {
                    Id: data.id,
                    Nome: data.name,
                    Unidade: data.unit.id,
                    Usuario: data.user.id,
                    Status: data.status,
                };

                console.log('XZ', dadosFormatadosAlterar)
                setDadosPlano([dadosFormatadosAlterar]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'name',
            tipoCampo: 'text',
            value : dadosPlano && dadosPlano.length > 0 ? dadosPlano[0].Nome : '',
        },
        {
            tipo: 'select',
            label: 'unitId',
            opcoes: units.map(unit => ({ value: unit.Id, label: unit.Nome })),
            tipoValue: 'int',
            value : dadosPlano && dadosPlano.length > 0 ? dadosPlano[0].Unidade : '',
        },
        {
            tipo: 'select',
            label: 'userId',
            opcoes: users.map(user => ({ value: user.Id, label: user.Nome })),
            tipoValue: 'int',
            value : dadosPlano && dadosPlano.length > 0 ? dadosPlano[0].Usuario : '',
        },
        {
            tipo: 'select',
            label: 'status',
            opcoes: [
                { value: 1, label: 'Não Iniciado' },
                { value: 2, label: 'Em Progresso' },
                { value: 3, label: 'Completo' },
                { value: 4, label: 'Cancelado' }
            ],
            value: dadosPlano && dadosPlano.length > 0
                ? (dadosPlano[0].Status === 'NOT_STARTED' ? 1
                    : dadosPlano[0].Status === 'IN_PROGRESS' ? 2
                        : dadosPlano[0].Status === 'COMPLETED' ? 3
                            : dadosPlano[0].Status === 'CANCELED' ? 4
                                : null)
                : null,
            tipoValue: 'int',
        },
    ];

    return (
        <div className="tittleAlterarPlano">
            <Highbar/>
            <LayoutCadastro titulo="Plano de Manutenção" valorUrlAdicionar="plano">
                <FormsAlterar campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mpp/maintenancePlan`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaAlterarPlano;
