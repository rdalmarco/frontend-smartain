import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import {useState, useEffect} from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaOrdens() {
    const backendUrl = 'http://localhost:8090'

    const [dadosOrdens, setDadosOrdens] = useState([]);

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    useEffect(() => {
        console.log('Dados atualizados:', dadosOrdens);
    }, [dadosOrdens]);


    function fetchDataFromBackend() {
        fetch(`${backendUrl}/api/mpp/serviceOrder`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos do backend:', data);

                function getStatus(status) {
                    if(status === 'NOT_STARTED') {
                        return "Não iniciada";
                    } else if (status === 'SUSPENDED') {
                        return "Suspensa";
                    } else if (status === 'IN_PROGRESS') {
                        return "Em progresso";
                    } else if (status === 'COMPLETED') {
                        return "Concluída";
                    }
                }

                const dadosFormatados = data.map(item => ({
                    Id: item.id,
                    Maquina: item.machine.tag,
                    Abertura: item.openingDate,
                    Prioridade: item.priority.descritpion,
                    Usuario: item.openingUser.name,
                    Status: getStatus(item.status),
                }));

                setDadosOrdens([dadosFormatados]);
            })
            .catch(error => console.error('Erro ao fazer solicitação:', error));
    }

    return (
        <div className="">
            <Highbar/>
            <LayoutConsulta titulo="Ordens de Serviço" valorUrlAdicionar="ordem" dados={dadosOrdens}/>
            <Bottombar/>
        </div>
    );
}

export default TelaConsultaOrdens;