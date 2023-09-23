import {Link} from "react-router-dom";

function TelaLogin() {
    return (
        <div className="">
                    <h1>Tela Login</h1>
                    <Link to="/menu">Logar</Link>
                    <div className="box">
                        <div className="group">
                            <div className="overlap">
                                <div className="rectangle" />
                                <div className="div" />
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group">
                                        <div className="text-wrapper">Confirmar</div>
                                    </div>
                                </div>
                                <div className="text-wrapper-2">Senha</div>
                                <div className="text-wrapper-3">Email</div>
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default TelaLogin;
