import React, {useEffect, useState} from "react";
import {Link, useHistory } from "react-router-dom";
import '../css/layoutConsulta.css';


function LayoutConsulta({titulo, valorUrlAdicionar}) {
    //Const dados para receber da requisição
    const [dados, setDados] = useState([]);
    //Const para armazenar o item selecionado da div
    const [linhaSelecionada, setLinhaSelecionada] = useState(null);
    //Const para pegar id da linha e jogar pra tela de edição
    const history = useHistory();

    //Teste dados grid
    useEffect(() => {
        const novosDados = [
            [
                { id: 1, nome: 'Item 1', descricao: 'X1', valor : 10},
                { id: 2, nome: 'Item 2', descricao: 'X2', valor : 20},
                { id: 3, nome: 'Item 3', descricao: 'X3', valor : 30},
                { id: 4, nome: 'Item 4', descricao: 'X4', valor : 40}
            ],
        ];

        setDados(novosDados);
    }, []);

    const selecionarLinha = (linha) => {
        setLinhaSelecionada(linhaSelecionada === linha ? null : linha);
        if (linha) {
            history.push(`/cadastros/${valorUrlAdicionar}/cadastrar${linha.id}`);
        }
    }

    const gerarCabecalho = () => {
        if (dados.length > 0) {
            return Object.keys(dados[0][0]).map((chave, index) => (
                <th key={index}>{chave}</th>
            ));
        }
        return null;
    }

    const gerarLinhas = () => {
        if (dados.length > 0) {
            return dados[0].map(item => (
                <tr key={item.id} className={linhaSelecionada === item ? 'selecionada' : ''} onClick={() => selecionarLinha(item)}>
                    {Object.values(item).map((valor, index) => (
                        <td key={index}>
                            {valor}
                        </td>
                    ))}
                </tr>
            ));
        }
        return null;
    }

    return (
        <div className="containerConsulta">
            <h1 className="tittleConsulta">{titulo}</h1>
            <div className="filtro">
                <input className="filtro" type="text"/>
                <button className="filtrar" type="submit">Filtrar</button>
                <Link to={`/cadastros/${valorUrlAdicionar}/cadastrar`}>
                    <button className="adicionar">Adicionar</button>
                </Link>
            </div>
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        {gerarCabecalho()}
                    </tr>
                    </thead>
                    <tbody>
                    {gerarLinhas()}
                    </tbody>
                </table>
                {linhaSelecionada && (
                    <div>
                        <h2>Linha Selecionada:</h2>
                        <p>ID: {linhaSelecionada.id}</p>
                        <p>Nome: {linhaSelecionada.nome}</p>
                        <p>Valor: {linhaSelecionada.valor}</p>
                    </div>
                )}
            </div>
        </div>
    )
        ;
}

export default LayoutConsulta;