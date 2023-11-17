import React, {useEffect, useState} from 'react';
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

const CampoInput = ({ label, type, defaultValue, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <input type={type} onChange={handleChange} placeholder={label} defaultValue={defaultValue} className="formsCadastro"/>
        </div>
    );
};

function FormsCadastro({ campos, backEndUrl})  {
    const [valoresCampos, setValoresCampos] = useState({});

    useEffect(() => {
        const initialFieldValues = {};
        campos.forEach(campo => {
            initialFieldValues[campo.label] = campo.defaultValue;
        });

        setValoresCampos(initialFieldValues);
    }, [campos]);

    const handleChangeCampo = (nomeCampo, valorCampo, tipoValue) => {
        let valorConvertido = valorCampo;

        // Verifica o tipo do campo e converte o valor conforme necessário
        if (tipoValue === 'int') {
            valorConvertido = parseInt(valorCampo, 10);
        } else if (tipoValue === 'float') {
            valorConvertido = parseFloat(valorCampo);
        } // Adicione outras verificações conforme necessário

        setValoresCampos({ ...valoresCampos, [nomeCampo]: valorConvertido });
    };

    const handleSubmit = async () => {
        console.log('Valores enviados ao backend: ', valoresCampos)
        console.log('Valores JSON', JSON.stringify(valoresCampos))
        try {
            const response = await fetch(backEndUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(valoresCampos), // Dados a serem enviados para o backend
            });

            console.log('Resposta da requisição:', response);


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
                            onChange={(valor) => handleChangeCampo(campo.label, valor, campo.tipoValue)}
                        />
                    );
                } else if (campo.tipo === 'input') {
                    return (
                        <CampoInput
                            key={index}
                            label={campo.label}
                            type={campo.tipoCampo}
                            defaultValue={campo.defaultValue}
                            name={campo.label}
                            onChange={(valor) => handleChangeCampo(campo.label, valor, campo.tipoValue)}
                        />
                    );

                }
                return null;
            })}
            <button type="submit" className="formsCadastro">Enviar</button>
        </form>
    );
};

export default FormsCadastro;
