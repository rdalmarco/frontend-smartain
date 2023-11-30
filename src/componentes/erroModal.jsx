import React from "react";

const ErroModal = ({ erro, fecharModal }) => {
  return (
    <div className="modal">
      <div className="modalContent">
        <p>{erro}</p>
        <button onClick={fecharModal}>Fechar</button>
      </div>
    </div>
  );
};

export default ErroModal;
