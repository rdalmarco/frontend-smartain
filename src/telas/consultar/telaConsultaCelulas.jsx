import { Link } from "react-router-dom";
import Highbar from "../../componentes/highbar";
import Bottombar from "../../componentes/bottombar";
import React, { useEffect, useState } from "react";
import LayoutConsulta from "../../componentes/layoutConsulta";

function TelaConsultaCelulas() {
  const backendUrl = "http://localhost:8090";

  const [dadosCelulas, setDadosCelulas] = useState([]);

  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  useEffect(() => {
    console.log("Dados atualizados:", dadosCelulas);
  }, [dadosCelulas]);

  function fetchDataFromBackend() {
    /* Adicionado um "1" no final da URL para testar o erro. */
    fetch(`${backendUrl}/api/mhu/productionCell1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro ao consultar os dados. ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dados recebidos do backend:", data);

        const dadosFormatados = data.map((item) => ({
          Id: item.id,
          Name: item.name,
          Description: item.description,
          Status: item.status,
        }));

        setDadosCelulas([dadosFormatados]);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="">
      <Highbar />
      <LayoutConsulta
        titulo="Células"
        valorUrlAdicionar="celula"
        dados={dadosCelulas}
      />
      <Bottombar />
    </div>
  );
}

export default TelaConsultaCelulas;
