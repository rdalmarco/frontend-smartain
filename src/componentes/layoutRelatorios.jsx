import React from "react";
import '../css/layoutRelatorios.css';

function LayoutRelatorio({titulo, children}) {
    return (
        <div className="containerRelatorio">
            <h1 className="tittleRelatorio">Relatório {titulo}</h1>
            {children}
        </div>
    );
}

export default LayoutRelatorio;
