import { Link } from "react-router-dom";
import '../css/telaLogin.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TelaLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUserId, setLoggedInUserId] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function onMenu() {

    }

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8090/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login: username, password: password }),
            });

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Login ou Senha incorretos');
                } else {
                    throw new Error('Erro ao tentar fazer login');
                }
            } else {
                const userId = await response.text();
                setLoggedInUserId(userId);
                navigate('/menu');
            }

            setError(null);

        } catch (err) {
            window.alert(err.message);
        }
    };


    return (
        <div className="tittleLogin">
            <div className="containerLogin">
                <h1>Entrar</h1>
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
                    {loggedInUserId}
                </div>
                <Link to="/menu">Menu</Link>
            </div>
        </div>
    );
}

export default TelaLogin;
