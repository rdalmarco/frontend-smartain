import '../css/highbar.css';
import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';


function Highbar() {
    const [activeItem, setActiveItem] = useState(null);
    const [menuOpen, setMenuOpen] = useState(null);

    const handleItemClick = (item) => {
        if (activeItem === item) {
            setActiveItem(null);
            setMenuOpen(false);
        } else {
            setActiveItem(item);
            setMenuOpen(true);
        }
    }


    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item" onClick={() => handleItemClick('cadastros')}>
                    <a href="#" className="navbar-link">Cadastros</a>
                    {activeItem === 'cadastros' && (
                        <ul className="sub-menu">
                            <li> <Link to="/cadastros/unidadefabril">Unidade Fabril</Link></li>
                            <li> <Link to="/cadastros/setor">Setor</Link></li>
                            <li> <Link to="/cadastros/celula">Célula</Link></li>
                        </ul>
                    )}
                </li>
                <li className="navbar-item" onClick={() => handleItemClick('execucoes')}>
                    <a href="#" className="navbar-link">Execução</a>
                    {activeItem === 'execucoes' && (
                        <ul className="sub-menu">
                            <li><Link to="/execucao/manual">Manual</Link></li>
                            <li><Link to="/execucao/sintoma">Sintoma</Link></li>
                            <li><Link to="/execucao/causa">Causa</Link></li>
                        </ul>
                    )}
                </li>
                <li className="navbar-item" onClick={() => handleItemClick('integracoes')}>
                    <a href="#" className="navbar-link">Integrações</a>
                    {activeItem === 'integracoes' && (
                        <ul className="sub-menu">
                            <li><Link to="/integracoes/sensor">Sensor</Link></li>
                            <li><Link to="/integracoes/configuracao">Configuração</Link></li>
                        </ul>
                    )}
                </li>
                <li className="navbar-item" onClick={() => handleItemClick('indicadores')}>
                    <a href="#" className="navbar-link">Indicadores</a>
                    {activeItem === 'indicadores' && (
                        <ul className="sub-menu">
                            <li><Link to="/indicadores/metas">Metas</Link></li>
                            <li><Link to="/indicadores/relatorios">Relatorios</Link></li>
                        </ul>
                    )}
                </li>
                <li className="navbar-item" onClick={() => handleItemClick('configuracoes')}>
                    <a href="#" className="navbar-link">Configurações</a>
                    {activeItem === 'configuracoes' && (
                        <ul className="sub-menu">
                            <li><Link to="/configuracoes/sistema">Sistema</Link></li>
                            <li><Link to="/configuracoes/usuarios">Usuários</Link></li>
                            <li><Link to="/configuracoes/grupos">Grupos</Link></li>
                            <li><Link to="/configuracoes/privilegios">Privilégios</Link></li>
                            <li><Link to="/configuracoes/parametros">Parâmetros</Link></li>
                            <li><Link to="/configuracoes/alertas">Alertas</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}



export default Highbar;
