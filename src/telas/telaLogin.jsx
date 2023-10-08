import {Link} from "react-router-dom";
import '../css/telaLogin.css';

function TelaLogin() {
    return (
        <div className="titleLogin">
            <h1>Login</h1>
            <div className="containerLogin">
                <div className="campos">
                    <input type="password"  placeholder="Senha"/>
                    <input type="email"  placeholder="Email"/>
                    <Link to="/menu" className="logar">Logar</Link>
                </div>
            </div>
        </div>
    );
}

export default TelaLogin;
