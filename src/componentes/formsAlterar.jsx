import React, {useEffect, useState} from 'react';
import '../css/forms.css'
import {useNavigate , useParams} from "react-router-dom";

const CampoSelect = ({ label, options, defaultValue, placeholder, onChange }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    useEffect(() => {
        setSelectedValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (e) => {
        const selectedVal = e.target.value;
        setSelectedValue(selectedVal);
        onChange(selectedVal);
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

const CampoInput = ({ label, type, defaultValue, onChange, placeholder, readOnly }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <input type={type} onChange={handleChange} placeholder={placeholder} defaultValue={defaultValue} className="formsCadastro" readOnly={readOnly}/>
        </div>
    );
};

const CampoTextarea = ({ label, defaultValue, placeholder, onChange }) => {
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

function FormsAlterar({campos, backEndUrl })  {
    const [valoresCampos, setValoresCampos] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const initialFieldValues = {};
        campos.forEach(campo => {
            console.log(campo.label, campo.value)
            initialFieldValues[campo.label] = campo.value;
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

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir?', );

        if (confirmDelete) {
            try {
                const response = await fetch(`${backEndUrl}/${id}`, {
                    method: 'DELETE',
                });

                console.log('Resposta da requisição de exclusão:', response);
                navigate(-1);

            } catch (error) {
                console.error('Erro ao excluir:', error);
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Valores enviados ao backend: ', valoresCampos)
        console.log('Valores JSON', JSON.stringify(valoresCampos))
        try {
            const dataSend = {
                id : parseInt(id),
                ...valoresCampos
            }

            console.log(dataSend)
            const response = await fetch(`${backEndUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataSend),

            });


            console.log('Resposta da requisição:', response);
            window.alert('Alterado com sucesso!');
            navigate(-1)


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
                            defaultValue={campo.value}
                            placeholder={campo.placeholder}
                            onChange={(valor) => handleChangeCampo(campo.label, valor, campo.tipoValue)}
                        />
                    );
                } else if (campo.tipo === 'input') {
                    return (
                        <CampoInput
                            key={index}
                            label={campo.label}
                            type={campo.tipoCampo}
                            defaultValue={campo.value}
                            placeholder={campo.placeholder}
                            name={campo.label}
                            readOnly={campo.readOnly}
                            onChange={(valor) => handleChangeCampo(campo.label, valor, campo.tipoValue)}
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
                                defaultValue={campo.value}
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
            <div className="textareaColumn">
                {campos
                    .filter((campo) => campo.tipo === 'textarea')
                    .map((campo, index) => (
                        <CampoTextarea
                            key={index}
                            label={campo.label}
                            defaultValue={campo.value}
                            placeholder={campo.placeholder}
                            onChange={(valor) =>
                                handleChangeCampo(campo.label, valor, campo.tipoValue)
                            }
                            className="formsCadastro"
                        />
                    ))}
            </div>
            <button type="submit" className="formsEnviar">Enviar</button>
            <button type="button" className="formsExcluir" onClick={handleDelete}>Excluir</button>
        </form>
    );
};

export default FormsAlterar;