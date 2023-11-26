import App from "../App";
import TelaLogin from "../telas/telaLogin";
import TelaCadastrar from "../telas/cadastrar/telaCadastrar";
import TelaMenu from "../telas/telaMenu";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaConsultaSetores from "../telas/consultar/telaConsultaSetores";
import TelaCadastrarSetor from "../telas/cadastrar/telaCadastrarSetor";
import TelaConsultaUnidadesFabril from "../telas/consultar/telaConsultaUnidadesFabril";
import TelaCadastrarUnidadeFabril from "../telas/cadastrar/telaCadastrarUnidadeFabril";
import TelaConsultaComponentes from "../telas/consultar/telaConsultaComponentes";
import TelaConsultaEquipamentos from "../telas/consultar/telaConsultaComponentes";
import TelaConsultaFabricantes from "../telas/consultar/telaConsultaFabricantes";
import TelaConsultaManuais from "../telas/consultar/telaConsultaManuais";
import TelaConsultaMaquinas from "../telas/consultar/telaConsultaMaquinas";
import TelaConsultaModelos from "../telas/consultar/telaConsultaModelos";
import TelaConsultaOrdens from "../telas/consultar/telaConsultaOrdens";
import TelaConsultaPlanos from "../telas/consultar/telaConsultaPlanos";
import TelaConsultaAlertas from "../telas/consultar/telaConsultaAlertas";
import TelaCadastrarCelula from "../telas/cadastrar/telaCadastrarCelula"
import TelaConsultaCelulas from "../telas/consultar/telaConsultaCelulas";
import TelaAlterarUnidadeFabril from "../telas/alterar/telaAlterarUnidadeFabril";
import TelaAlterarSetor from "../telas/alterar/telaAlterarSetor";
import TelaCadastrarComponente from "../telas/cadastrar/telaCadastrarComponente";
import TelaCadastrarEquipamento from "../telas/cadastrar/telaCadastrarEquipamento";
import TelaCadastrarFabricante from "../telas/cadastrar/telaCadastrarFabricante";
import TelaCadastrarManual from "../telas/cadastrar/telaCadastrarManual";
import TelaCadastrarMaquina from "../telas/cadastrar/telaCadastrarMaquina";
import TelaCadastrarModelo from "../telas/cadastrar/telaCadastarModelo";
import TelaCadastrarPlano from "../telas/cadastrar/telaCadastrarPlano";
import TelaCadastrarOrdem from "../telas/cadastrar/telaCadastrarOrdem";
import TelaCadastrarAlerta from "../telas/cadastrar/telaCadastrarAlerta";
import TelaCadastrarSolicitacao from "../telas/cadastrar/telaCadastrarSolicitacao";
import TelaConsultaSolicitacao from "../telas/consultar/telaConsultaSolicitacao";
import TelaAlterarCelula from "../telas/alterar/telaAlterarCelula";
import TelaAlterarComponente from "../telas/alterar/telaAlterarComponente";
import TelaAlterarEquipamento from "../telas/alterar/telaAlterarEquipamento";
import TelaAlterarFabricante from "../telas/alterar/telaAlterarFabricante";
import TelaAlterarManual from "../telas/alterar/telaAlterarManual";
import TelaAlterarMaquina from "../telas/alterar/telaAlterarMaquina";
import TelaAlterarModelo from "../telas/alterar/telaAlterarModelo";
import TelaAlterarOrdem from "../telas/alterar/telaAlterarOrdem";
import TelaAlterarPlano from "../telas/alterar/telaAlterarPlano";
import TelaAlterarAlerta from "../telas/alterar/telaAlterarAlerta";
import TelaAlterarSolicitacao from "../telas/alterar/telaAlterarSolicitacao";
import TelaCadastrarUsuario from "../telas/cadastrar/telaCadastrarUsuario";

function TarefasApp() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}></Route>
                    <Route path='/login' element={<TelaLogin />}></Route>
                    <Route path='/cadastros/usuario' element={<TelaCadastrarUsuario />}></Route>
                    <Route path='/cadastrar' element={<TelaCadastrar />}></Route>
                    <Route path='/menu' element={<TelaMenu />}></Route>
                    <Route path='/cadastros/setor' element={<TelaConsultaSetores />}></Route>
                    <Route path='/cadastros/setor/cadastrar' element={<TelaCadastrarSetor />} />
                    <Route path='/cadastros/setor/alterar/:id' element={<TelaAlterarSetor />} />
                    <Route path='/cadastros/unidadefabril' element={<TelaConsultaUnidadesFabril />} />
                    <Route path='/cadastros/unidadefabril/cadastrar' element={<TelaCadastrarUnidadeFabril />} />
                    <Route path='/cadastros/unidadefabril/alterar/:id' element={<TelaAlterarUnidadeFabril />} />
                    <Route path='/cadastros/celula/' element={<TelaConsultaCelulas />} />
                    <Route path='/cadastros/celula/cadastrar' element={<TelaCadastrarCelula />} />
                    <Route path='/cadastros/celula/alterar/:id' element={<TelaAlterarCelula />} />
                    <Route path='/cadastros/componente' element={<TelaConsultaComponentes />} />
                    <Route path='/cadastros/componente/cadastrar' element={<TelaCadastrarComponente />} />
                    <Route path='/cadastros/componente/alterar/:id' element={<TelaAlterarComponente />} />
                    <Route path='/cadastros/equipamento' element={<TelaConsultaEquipamentos />} />
                    <Route path='/cadastros/equipamento/cadastrar' element={<TelaCadastrarEquipamento />} />
                    <Route path='/cadastros/equipamento/alterar/:id' element={<TelaAlterarEquipamento />} />
                    <Route path='/cadastros/fabricante' element={<TelaConsultaFabricantes />} />
                    <Route path='/cadastros/fabricante/cadastrar' element={<TelaCadastrarFabricante />} />
                    <Route path='/cadastros/fabricante/alterar/:id' element={<TelaAlterarFabricante />} />
                    <Route path='/cadastros/manual' element={<TelaConsultaManuais />} />
                    <Route path='/cadastros/manual/cadastrar' element={<TelaCadastrarManual />} />
                    <Route path='/cadastros/manual/alterar/:id' element={<TelaAlterarManual />} />
                    <Route path='/cadastros/maquina' element={<TelaConsultaMaquinas />} />
                    <Route path='/cadastros/maquina/cadastrar' element={<TelaCadastrarMaquina />} />
                    <Route path='/cadastros/maquina/alterar/:id' element={<TelaAlterarMaquina />} />
                    <Route path='/cadastros/modelo' element={<TelaConsultaModelos />} />
                    <Route path='/cadastros/modelo/cadastrar' element={<TelaCadastrarModelo />} />
                    <Route path='/cadastros/modelo/alterar/:id' element={<TelaAlterarModelo />} />
                    <Route path='/cadastros/ordem' element={<TelaConsultaOrdens />} />
                    <Route path='/cadastros/ordem/cadastrar' element={<TelaCadastrarOrdem />} />
                    <Route path='/cadastros/ordem/alterar/:id' element={<TelaAlterarOrdem />} />
                    <Route path='/cadastros/plano' element={<TelaConsultaPlanos />} />
                    <Route path='/cadastros/plano/cadastrar' element={<TelaCadastrarPlano />} />
                    <Route path='/cadastros/plano/alterar/:id' element={<TelaAlterarPlano />} />
                    <Route path='/cadastros/alerta' element={<TelaConsultaAlertas />} />
                    <Route path='/cadastros/alerta/cadastrar' element={<TelaCadastrarAlerta />} />
                    <Route path='/cadastros/alerta/alterar/:id' element={<TelaAlterarAlerta />} />
                    <Route path='/cadastros/solicitacao' element={<TelaConsultaSolicitacao />} />
                    <Route path='/cadastros/solicitacao/cadastrar' element={<TelaCadastrarSolicitacao />} />
                    <Route path='/cadastros/solicitacao/alterar/:id' element={<TelaAlterarSolicitacao />} />
                </Routes>
            </BrowserRouter>
    )}

export default TarefasApp
