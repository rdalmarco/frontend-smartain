import React, { useState, useEffect } from "react";
import LayoutCadastro from "../../componentes/layoutCadastro";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import FormsCadastro from "../../componentes/formsCadastro";

function TelaCadastrarUsuario() {
    const backendUrl = 'http://localhost:8090'

    const camposFormulario = [
        {
            tipo: 'input',
            label: 'name',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'login',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'email',
            tipoCampo: 'text',
        },
        {
            tipo: 'input',
            label: 'password',
            tipoCampo: 'text',
        }
        /*{
            tipo: 'select',
            label: 'userGroup',
            opcoes: userGroupTypes.map(userGroup => ({ value: userGroup.Id, label: userGroup.name})),
            tipoValue: 'int',
        },*/
    ];

    return (
        <div className="tittleCadastarUsuario">
            <Highbar/>
            <LayoutCadastro titulo="Usuário" valorUrlAdicionar="usuario">
                <FormsCadastro campos={camposFormulario} backEndUrl = {`${backendUrl}/api/glo/`} />
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarUsuario;
