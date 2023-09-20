import React, {useState} from "react";
import TelaMenu from "./telaMenu";

function TelaLogin() {
    const [telaAtual, setTelaAtual] = useState('telaLogin');

    const navegarParaTelaMenu = () => {
        setTelaAtual('telaMenu');
    };

    return (
        <div className="">
            {telaAtual === 'telaLogin' && (
                <div>
                    <h1>Tela Login</h1>
                    <button onClick={navegarParaTelaMenu}>Confirmar</button>
                </div>
            )}
            {telaAtual === 'telaMenu' && <TelaMenu />}
        </div>
    );
}

export default TelaLogin;
