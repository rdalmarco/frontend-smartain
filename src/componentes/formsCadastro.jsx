import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/forms.css'


const CampoTextarea = ({ label, defaultValue, onChange, placeholder }) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <textarea
                onChange={handleChange}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className="formsCadastro"
            />
        </div>
    );
};

const CampoSelect = ({ label, options, onChange, placeholder, defaultValue }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    useEffect(() => {
        setSelectedValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <select onChange={handleChange} placeholder={placeholder} className="formsCadastro" value={selectedValue}>
                <option value="" disabled selected>
                    {placeholder}
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

const CampoInput = ({ label, type, defaultValue, onChange, placeholder }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <input type={type} onChange={handleChange} placeholder={placeholder} defaultValue={defaultValue} className="formsCadastro"/>
        </div>
    );
};

function FormsCadastro({campos, backEndUrl})  {
    const navigate = useNavigate();
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

        if (tipoValue === 'int') {
            valorConvertido = parseInt(valorCampo, 10);
        } else if (tipoValue === 'float') {
            valorConvertido = parseFloat(valorCampo);
        }

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
            navigate(-1)


        } catch (error) {
            console.error('Erro ao enviar para o backend:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-select-container">
                <div className="formsColumn1">
                    {campos.map((campo, index) => {
                        if (campo.tipo === 'select') {
                            return (
                                <CampoSelect
                                    key={index}
                                    label={campo.label}
                                    options={campo.opcoes}
                                    defaultValue={campo.defaultValue}
                                    placeholder={campo.placeholder}
                                    onChange={(valor) =>
                                        handleChangeCampo(campo.label, valor, campo.tipoValue)
                                    }
                                    className="formsCadastro"
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
                                    placeholder={campo.placeholder}
                                    onChange={(valor) =>
                                        handleChangeCampo(campo.label, valor, campo.tipoValue)
                                    }
                                    className="formsCadastro"
                                />
                            );
                        } else if (campo.tipo === 'inputTime' || campo.tipo === 'inputDate') {
                            return (
                             <div>
                                 <label htmlFor="">{campo.placeholder}:</label>
                                <CampoInput
                                    key={index}
                                    label={campo.label}
                                    type={campo.tipoCampo}
                                    defaultValue={campo.defaultValue}
                                    name={campo.label}
                                    onChange={(valor) =>
                                        handleChangeCampo(campo.label, valor, campo.tipoValue)
                                    }
                                    className="formsCadastro"
                                />
                            </div>
                            );
                        return null;
                    }})}
                </div>
                <div className="textareaColumn">
                    {campos
                        .filter((campo) => campo.tipo === 'textarea')
                        .map((campo, index) => (
                            <CampoTextarea
                                key={index}
                                label={campo.label}
                                defaultValue={campo.defaultValue}
                                placeholder={campo.placeholder}
                                onChange={(valor) =>
                                    handleChangeCampo(campo.label, valor, campo.tipoValue)
                                }
                                className="formsCadastro"
                            />
                        ))}
                </div>
            </div>
            <button type="submit" className="formsEnviar">
                Enviar
            </button>
        </form>
    );
}

export default FormsCadastro;
