import '../css/telaCadastrarUnidadeFabril.css';
import React, { useState, useEffect } from "react";
import LayoutCadastro from "../componentes/layoutCadastro";
import Highbar from "../componentes/highbar";
import Bottombar from "../componentes/bottombar";

function TelaCadastrarUnidadeFabril() {
    //Const para armazenar as opções da lista
    const [cidades, setCidades] = useState([]);

    const carregarCidades = async () => {
        try {
            const response = await fetch("URL_DO_BACKEND_AQUI");
            //const data = await response.json();
            const data = [
                { Nome: 'Rio do Sul'},
                { Nome: 'Lages'}
            ]
            setCidades(data); // Atualiza o estado com os dados do backend
        } catch (error) {
            console.error("Erro ao carregar cidades:", error);
        }
    };

    useEffect(() => {
        carregarCidades();
    }, []);

    const handleSelectChange = (e) => {
        // Remove a opção "Cidades" quando uma seleção real é feita
        const option = e.target.querySelector('option[value="placeholder"]');
        if (option) {
            option.remove();
        }

        const selectedOption = e.target.value;
        // Faça algo com a opção selecionada, se necessário
    };

    return (
        <div className="tittleCadastrarUnidadeFabril">
            <Highbar/>
            <LayoutCadastro titulo="Unidade Fabril" valorUrlAdicionar="unidadefabril">
                <div className="camposCadastrarUnidadeFabril">
                    <input type="text" placeholder="Nome"/>
                    <select onChange={handleSelectChange}>
                        <option value="placeholder" disabled selected>Cidade</option>
                        {cidades.map((cidade) => (
                            <option key={cidade.Nome} value={cidade.Nome}>
                                {cidade.Nome}
                            </option>
                        ))}
                    </select>
                    <input type="text" placeholder="Identificador"/>
                    <input type="text" placeholder="CEP"/>
                    <input type="text" placeholder="Descricao"/>
                </div>
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarUnidadeFabril;
