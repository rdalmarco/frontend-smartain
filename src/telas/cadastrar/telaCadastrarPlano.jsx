import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarPlano() {
    const backendUrl = 'http://localhost:8090'
    const [units, setUnits] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
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

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'name',
            placeholder: 'Nome',
            tipoCampo: 'text',
        },
        {
            tipo: 'select',
            placeholder: 'Unidade Fabril',
            label: 'unitId',
            opcoes: units.map(unit => ({ value: unit.Id, label: unit.Nome })),
            tipoValue: 'int',
        },
        {
            tipo: 'hidden',
            label: 'status',
            tipoCampo: 'text',
            defaultValue: 1,
            tipoValue: 'int',
        },
        {
            tipo: 'select',
            placeholder: 'Usuário Responsável',
            label: 'userId',
            opcoes: users.map(user => ({ value: user.Id, label: user.Nome })),
            tipoValue: 'int',
        },
    ]

    return (
        <div className="tittleCadastrarPlano">
            <Highbar/>
            <LayoutCadastro titulo="Plano de Manutenção" valorUrlAdicionar="plano">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/mpp/maintenancePlan`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarPlano;
