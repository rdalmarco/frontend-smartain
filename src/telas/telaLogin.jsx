import { Link } from "react-router-dom";
import '../css/telaLogin.css';
import React, { useState } from 'react';

function TelaLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUserId, setLoggedInUserId] = useState(null);
    const [error, setError] = useState(null);

    function onMenu() {

    }

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8090/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login: username, senha: password }),
            });

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Credenciais inválidas');
                } else {
                    throw new Error('Erro ao tentar fazer login');
                }
            }

            const userId = await response.text();
            setLoggedInUserId(userId);

            setUsername('');
            setPassword('');
            setError(null); // Limpar erro se login bem-sucedido
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div className="tittleLogin">
            <h1>Login</h1>
            <div className="containerLogin">
                <div className="campos">
                    <p>Email</p>
                    <input
                        className="email"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <p>Senha</p>
                    <input
                        className="senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="logar" onClick={handleLogin}>
                        Logar
                    </button>
                    {loggedInUserId && <Link to="/menu">Menu</Link>}
                    {error && <p className="error-message">{error}</p>}
                </div>
                <Link to="/menu">Menu</Link>
            </div>
        </div>
    );
}

export default TelaLogin;
