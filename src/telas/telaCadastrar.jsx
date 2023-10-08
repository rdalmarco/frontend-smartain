import {Link} from "react-router-dom";
import '../css/telaCadastrar.css';

function TelaCadastrar() {
    return (
        <div className="titleCadastrar">
            <h1>Cadastro</h1>
            <div className="containerCadastrar">
                <div className="campos">
                    <input type="text"  placeholder="Nome"/>
                    <input type="text"  placeholder="Email"/>
                    <input type="text"  placeholder="Login"/>
                    <input type="password"  placeholder="Senha"/>
                    <input type="text"  placeholder="Unidade Fabril"/>
                    <input type="text"  placeholder="Grupo"/>
                    <Link to="/login" className="cadastrarCadastrar">Cadastrar</Link>
                </div>
            </div>
        </div>
    );
}

export default TelaCadastrar;
