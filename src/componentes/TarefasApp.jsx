import App from "../App";
import TelaLogin from "../telas/telaLogin";
import TelaCadastrar from "../telas/telaCadastrar";
import TelaMenu from "../telas/telaMenu";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaConsultaSetores from "../telas/telaConsultaSetores";

function TarefasApp() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}></Route>
                    <Route path='/login' element={<TelaLogin />}></Route>
                    <Route path='/cadastrar' element={<TelaCadastrar />}></Route>
                    <Route path='/menu' element={<TelaMenu />}></Route>
                    <Route path='/cadastros/setor' element={<TelaConsultaSetores />}></Route>
                </Routes>
            </BrowserRouter>
    )}

export default TarefasApp
