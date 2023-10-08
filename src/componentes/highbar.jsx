import React, { useState } from 'react';
import '../css/highbar.css';
import {Link} from "react-router-dom";


function Highbar() {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (item) => {
        if (activeItem === item) {
            setActiveItem(null);
        } else {
            setActiveItem(item);
        }
    }

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item" onClick={() => handleItemClick('cadastros')}>
                    <a href="#" className="navbar-link">Cadastros</a>
                    {activeItem === 'cadastros' && (
                        <ul className="sub-menu">
                            <li> <Link to="/UnidadeFabril">Unidade Fabril</Link></li>
                            <li> <Link to="/Setor">Setor</Link></li>
                            <li> <Link to="/Célula">Célula</Link></li>
                        </ul>
                    )}
                </li>
                <li className="navbar-item" onClick={() => handleItemClick('execucoes')}>
                    <a href="#" className="navbar-link">Execução</a>
                    {activeItem === 'execucoes' && (
                        <ul className="sub-menu">
                            <li><Link to="/Manual">Manual</Link></li>
                            <li><Link to="/Sintoma">Sintoma</Link></li>
                            <li><Link to="/Causa">Causa</Link></li>
                        </ul>
                    )}
                </li>
                <li className="navbar-item" onClick={() => handleItemClick('integracoes')}>
                    <a href="#" className="navbar-link">Integrações</a>
                    {activeItem === 'integracoes' && (
                        <ul className="sub-menu">
                            <li><Link to="/Sensor">Sensor</Link></li>
                            <li><Link to="/Configuracao">Configuração</Link></li>
                        </ul>
                    )}
                </li>
                <li className="navbar-item" onClick={() => handleItemClick('indicadores')}>
                    <a href="#" className="navbar-link">Indicadores</a>
                    {activeItem === 'indicadores' && (
                        <ul className="sub-menu">
                            <li><Link to="/Metas">Metas</Link></li>
                            <li><Link to="/Relatorios">Relatorios</Link></li>
                        </ul>
                    )}
                </li>
                <li className="navbar-item" onClick={() => handleItemClick('configuracoes')}>
                    <a href="#" className="navbar-link">Configurações</a>
                    {activeItem === 'configuracoes' && (
                        <ul className="sub-menu">
                            <li><Link to="/Sistema">Sistema</Link></li>
                            <li><Link to="/Usuarios">Usuários</Link></li>
                            <li><Link to="/Grupos">Grupos</Link></li>
                            <li><Link to="/Privilegios">Privilégios</Link></li>
                            <li><Link to="/Parametros">Parâmetros</Link></li>
                            <li><Link to="/Alertas">Alertas</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}



export default Highbar;
