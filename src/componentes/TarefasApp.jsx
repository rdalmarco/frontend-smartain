import App from "../App";
import TelaLogin from "../telas/telaLogin";
import TelaCadastrar from "../telas/cadastrar/telaCadastrar";
import TelaMenu from "../telas/telaMenu";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TelaConsultaUsuario from "../telas/consultar/telaConsutaUsuario";
import TelaCadastrarUsuario from "../telas/cadastrar/telaCadastrarUsuario";
import TelaAlterarUsuario from "../telas/alterar/telaAlterarUsuario";

import TelaConsultaSetores from "../telas/consultar/telaConsultaSetores";
import TelaCadastrarSetor from "../telas/cadastrar/telaCadastrarSetor";
import TelaAlterarSetor from "../telas/alterar/telaAlterarSetor";

import TelaConsultaUnidadesFabril from "../telas/consultar/telaConsultaUnidadesFabril";
import TelaCadastrarUnidadeFabril from "../telas/cadastrar/telaCadastrarUnidadeFabril";
import TelaAlterarUnidadeFabril from "../telas/alterar/telaAlterarUnidadeFabril";

import TelaConsultaComponentes from "../telas/consultar/telaConsultaComponentes";
import TelaAlterarComponente from "../telas/alterar/telaAlterarComponente";
import TelaCadastrarComponente from "../telas/cadastrar/telaCadastrarComponente";

import TelaConsultaEquipamentos from "../telas/consultar/telaConsultaEquipamentos";
import TelaCadastrarEquipamento from "../telas/cadastrar/telaCadastrarEquipamento";
import TelaAlterarEquipamento from "../telas/alterar/telaAlterarEquipamento";

import TelaConsultaFabricantes from "../telas/consultar/telaConsultaFabricantes";
import TelaCadastrarFabricante from "../telas/cadastrar/telaCadastrarFabricante";
import TelaAlterarFabricante from "../telas/alterar/telaAlterarFabricante";

import TelaConsultaPlanos from "../telas/consultar/telaConsultaPlanos";
import TelaCadastrarPlano from "../telas/cadastrar/telaCadastrarPlano";
import TelaAlterarPlano from "../telas/alterar/telaAlterarPlano";

import TelaConsultaAlertas from "../telas/consultar/telaConsultaAlertas";
import TelaCadastrarAlerta from "../telas/cadastrar/telaCadastrarAlerta";
import TelaAlterarAlerta from "../telas/alterar/telaAlterarAlerta";

import TelaConsultaCelulas from "../telas/consultar/telaConsultaCelulas";
import TelaCadastrarCelula from "../telas/cadastrar/telaCadastrarCelula"
import TelaAlterarCelula from "../telas/alterar/telaAlterarCelula";

import TelaConsultaManuais from "../telas/consultar/telaConsultaManuais";
import TelaCadastrarManual from "../telas/cadastrar/telaCadastrarManual";
import TelaAlterarManual from "../telas/alterar/telaAlterarManual";

import TelaConsultaMaquinas from "../telas/consultar/telaConsultaMaquinas";
import TelaCadastrarMaquina from "../telas/cadastrar/telaCadastrarMaquina";
import TelaAlterarMaquina from "../telas/alterar/telaAlterarMaquina";

import TelaConsultaModelos from "../telas/consultar/telaConsultaModelos";
import TelaCadastrarModelo from "../telas/cadastrar/telaCadastarModelo";
import TelaAlterarModelo from "../telas/alterar/telaAlterarModelo";

import TelaConsultaOrdens from "../telas/consultar/telaConsultaOrdens";
import TelaCadastrarOrdem from "../telas/cadastrar/telaCadastrarOrdem";
import TelaAlterarOrdem from "../telas/alterar/telaAlterarOrdem";

import TelaConsultaSolicitacao from "../telas/consultar/telaConsultaSolicitacao";
import TelaCadastrarSolicitacao from "../telas/cadastrar/telaCadastrarSolicitacao";
import TelaAlterarSolicitacao from "../telas/alterar/telaAlterarSolicitacao";


function TarefasApp() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}></Route>
                    <Route path='/login' element={<TelaLogin />}></Route>

                    <Route path='/cadastros/usuario' element={<TelaConsultaUsuario />}></Route>
                    <Route path='/cadastros/usuario/cadastrar' element={<TelaCadastrarUsuario />}></Route>
                    <Route path='/cadastros/usuario/alterar/:Id' element={<TelaAlterarUsuario />}></Route>

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
