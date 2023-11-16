import App from "../App";
import TelaLogin from "../telas/telaLogin";
import TelaCadastrar from "../telas/telaCadastrar";
import TelaMenu from "../telas/telaMenu";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaConsultaSetores from "../telas/telaConsultaSetores";
import TelaCadastrarSetor from "../telas/telaCadastrarSetor";
import TelaConsultaUnidadesFabril from "../telas/telaConsultaUnidadesFabril";
import TelaCadastrarUnidadeFabril from "../telas/telaCadastrarUnidadeFabril";
import TelaConsultaComponentes from "../telas/telaConsultaComponentes";
import TelaConsultaEquipamentos from "../telas/telaConsultaComponentes";
import TelaConsultaFabricantes from "../telas/telaConsultaFabricantes";
import TelaConsultaManuais from "../telas/telaConsultaManuais";
import TelaConsultaMaquinas from "../telas/telaConsultaMaquinas";
import TelaConsultaModelos from "../telas/telaConsultaModelos";
import TelaConsultaOrdens from "../telas/telaConsultaOrdens";
import TelaConsultaPlanos from "../telas/telaConsultaPlanos";
import TelaConsultaAlertas from "../telas/telaConsultaAlertas";
import TelaCadastrarCelula from "../telas/telaCadastrarCelula";
import TelaConsultaCelulas from "../telas/telaConsultaCelulas";

function TarefasApp() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}></Route>
                    <Route path='/login' element={<TelaLogin />}></Route>
                    <Route path='/cadastrar' element={<TelaCadastrar />}></Route>
                    <Route path='/menu' element={<TelaMenu />}></Route>
                    <Route path='/cadastros/setor' element={<TelaConsultaSetores />}></Route>
                    <Route path='/cadastros/setor/cadastrar' element={<TelaCadastrarSetor />} />
                    <Route path='/cadastros/unidadefabril' element={<TelaConsultaUnidadesFabril />} />
                    <Route path='/cadastros/unidadefabril/cadastrar' element={<TelaCadastrarUnidadeFabril />} />
                    <Route path='/cadastros/celula/' element={<TelaConsultaCelulas />} />
                    <Route path='/cadastros/celula/cadastrar' element={<TelaCadastrarCelula />} />
                    <Route path='/cadastros/componente' element={<TelaConsultaComponentes />} />
                    <Route path='/cadastros/equipamento' element={<TelaConsultaEquipamentos />} />
                    <Route path='/cadastros/fabricante' element={<TelaConsultaFabricantes />} />
                    <Route path='/cadastros/manual' element={<TelaConsultaManuais />} />
                    <Route path='/cadastros/maquina' element={<TelaConsultaMaquinas />} />
                    <Route path='/cadastros/modelo' element={<TelaConsultaModelos />} />
                    <Route path='/cadastros/ordem' element={<TelaConsultaOrdens />} />
                    <Route path='/cadastros/plano' element={<TelaConsultaPlanos />} />
                    <Route path='/cadastros/alerta' element={<TelaConsultaAlertas />} />
                </Routes>
            </BrowserRouter>
    )}

export default TarefasApp
