import React, { useState } from 'react';
import '../css/formsCadastro.css'

const CampoSelect = ({ label, options, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <select onChange={handleChange} placeholder={label} className="formsCadastro">
                <option value="" disabled selected>
                    {label}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

const CampoInput = ({ label, type, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <input type={type} onChange={handleChange} placeholder={label} className="formsCadastro"/>
        </div>
    );
};

function FormsCadastro({ campos, backEndUrl})  {
    const [valoresCampos, setValoresCampos] = useState({});

    const handleChangeCampo = (nomeCampo, valorCampo) => {
        setValoresCampos({ ...valoresCampos, [nomeCampo]: valorCampo });
    };

    const handleSubmit = async () => {
        console.log('Valores enviados ao backend: ', valoresCampos)
        try {
            const response = await fetch(backEndUrl, {
                method: 'POST', // ou 'PUT', 'DELETE', etc., dependendo do seu endpoint
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(valoresCampos), // Dados a serem enviados para o backend

            });


            const data = await response.json();
            console.log('Resposta do backend:', data);

            // Lógica adicional após o envio bem-sucedido (redirecionamento, feedback ao usuário, etc.)
        } catch (error) {
            console.error('Erro ao enviar para o backend:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {campos.map((campo, index) => {
                if (campo.tipo === 'select') {
                    return (
                        <CampoSelect
                            key={index}
                            label={campo.label}
                            options={campo.opcoes}
                            onChange={(valor) => handleChangeCampo(campo.label, valor)}
                        />
                    );
                } else if (campo.tipo === 'input') {
                    return (
                        <CampoInput
                            key={index}
                            label={campo.label}
                            type={campo.tipoCampo}
                            onChange={(valor) => handleChangeCampo(campo.label, valor)}
                        />
                    );
                }
                return null;
            })}
            <button type="button" className="formsCadastro" onClick={handleSubmit}>Enviar</button>
        </form>
    );
};

export default FormsCadastro;
