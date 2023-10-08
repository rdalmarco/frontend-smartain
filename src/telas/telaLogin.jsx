import {Link} from "react-router-dom";
import '../css/telaLogin.css';

function TelaLogin() {
    return (
        <div className="titleLogin">
            <h1>Login</h1>
            <div className="containerLogin">
                <div className="campos">
                    <p>Email</p>
                    <input className="email" type="text"/>
                    <p>Senha</p>
                    <input className="senha" type="password"/>
                    <Link to="/menu" className="logar">Logar</Link>
                </div>
            </div>
        </div>
    );
}

export default TelaLogin;
