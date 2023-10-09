import '../css/telaCadastrarSetor.css';
import React, { useState, useEffect } from "react";
import LayoutCadastro from "../componentes/layoutCadastro";
import Highbar from "../componentes/highbar";
import Bottombar from "../componentes/bottombar";

function TelaCadastrarSetor() {
    //Const para armazenar as opções da lista
    const [unidadesFabris, setUnidadesFabris] = useState([]);

    const carregarUnidadesFabris = async () => {
        try {
            const response = await fetch("URL_DO_BACKEND_AQUI");
            const data = await response.json();
            setUnidadesFabris(data); // Atualiza o estado com os dados do backend
        } catch (error) {
            console.error("Erro ao carregar unidades fabris:", error);
        }
    };

    useEffect(() => {
        carregarUnidadesFabris();
    }, []);

    const handleSelectChange = (e) => {
        // Remove a opção "Unidades Fabris" quando uma seleção real é feita
        const option = e.target.querySelector('option[value="placeholder"]');
        if (option) {
            option.remove();
        }

        const selectedOption = e.target.value;
        // Faça algo com a opção selecionada, se necessário
    };

    return (
        <div className="tittleCadastrarSetor">
            <Highbar/>
            <LayoutCadastro titulo="Setor" valorUrlAdicionar="setor">
            <div className="camposCadastrarSetor">
                <input type="text" placeholder="Nome"/>
                <select onChange={handleSelectChange}>
                    <option value="placeholder" disabled selected>Unidades Fabris</option>
                    {unidadesFabris.map((unidade) => (
                        <option key={unidade.id} value={unidade.id}>
                            {unidade.nome}
                        </option>
                    ))}
                </select>
                <input type="text" placeholder="Identificador"/>
                <input type="text" placeholder="Descricao"/>
            </div>
            </LayoutCadastro>
            <Bottombar/>
        </div>
    );
}

export default TelaCadastrarSetor;
