import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import LayoutRelatorio from "../../componentes/layoutRelatorios";
import '../../css/telaRelatoriosGerais.css'

function TelaRelatoriosGerais() {
    const backendUrl = 'http://localhost:8090'
    const [dadosJSON, setDadosJSON] = useState([]);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

    useEffect(() => {
        if (opcaoSelecionada === 'Maquinas') {
            fetchMachines()
        } else if (opcaoSelecionada === 'Equipamentos') {
            fetchEquipamentos()
        } else if (opcaoSelecionada === 'Setores') {
            fetchSetores()
        } else if (opcaoSelecionada === 'Ordens') {
            fetchOrdens()
        }
    }, [opcaoSelecionada]);

    function fetchMachines() {
        fetch(`${backendUrl}/api/mhu/machine`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosMachine = data.map(item => ({
                    Id: item.id,
                    Tag: item.tag,
                    Unidade: item.unit.tag,
                    Setor: item.sector.name,
                    Status: item.status === 'ACTIVE' ? 'Ativo' : 'Inativo'
                }));

                setDadosJSON(dadosMachine);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchEquipamentos() {
        fetch(`${backendUrl}/api/mhu/equipment`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosEquipamentos = data.map(item => ({
                    Id: item.id,
                    Nome: item.name,
                    Descrição: item.technicalData,
                    Modelo : item.model.model,
                    Maquina : item.machine.tag,
                    Status: item.status,
                }));

                setDadosJSON(dadosEquipamentos);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchSetores() {
        fetch(`${backendUrl}/api/mhu/sector`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                const dadosSetores = data.map(item => ({
                    Id: item.id,
                    Nome: item.name,
                    Unidade: item.unit.tag,
                    Tag: item.tag,
                    Descrição: item.description,
                    Status: item.status,
                    Criação: item.createdDate,
                }));

                setDadosJSON(dadosSetores);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function fetchOrdens() {
        fetch(`${backendUrl}/api/mpp/serviceOrder`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend Values:', data);

                const dadosOrdens = data.map(item => ({
                    Id: item.id,
                    Unidade: item.unit.tag,
                    Setor: item.machine.sector.name,
                    Maquina: item.machine.tag,
                    Prioridade: item.priority.descritpion,
                    Tipo: item.maintenanceType.descritpion,
                    Estimado: item.estimatedDuration,
                    Status: item.status,
                }));

                setDadosJSON(dadosOrdens);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    function gerar() {
            gerarPDF(dadosJSON)
    }

    const gerarPDF = (dadosGerar) => {
        const doc = new jsPDF();
        if (dadosGerar.length > 0) {
            const headers = Object.keys(dadosGerar[0]);
            const body = dadosGerar.map(obj => headers.map(key => obj[key]));

            doc.autoTable({
                head: [headers],
                body: body
            });
            doc.save(`Relatório ${opcaoSelecionada}.pdf`);
        } else {
            console.error('Nenhum dado disponível para gerar o PDF');
        }
    };


    return (
        <div className="relatoriosGerais">
            <Highbar/>
                <LayoutRelatorio titulo="Geral">
                        <select onChange={(e) => setOpcaoSelecionada(e.target.value)}>
                            <option value="">Selecione uma opção</option>
                            <option value="Maquinas">Maquinas</option>
                            <option value="Equipamentos">Equipamentos</option>
                            <option value="Setores">Setores</option>
                            <option value="Ordens">Ordens de Serviço</option>
                        </select>
                        <button onClick={gerar}>Gerar PDF</button>
                </LayoutRelatorio>
            <Bottombar/>
        </div>
    );
}

export default TelaRelatoriosGerais;
