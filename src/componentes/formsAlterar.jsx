import React, {useEffect, useState} from 'react';
import '../css/forms.css'
import {useNavigate , useParams} from "react-router-dom";

const CampoSelect = ({ label, options, defaultValue, onChange }) => {
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
            <select onChange={handleChange} placeholder={label} className="formsCadastro" value={selectedValue}>
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

        // Verifica o tipo do campo e converte o valor conforme necessário
        if (tipoValue === 'int') {
            valorConvertido = parseInt(valorCampo, 10);
        } else if (tipoValue === 'float') {
            valorConvertido = parseFloat(valorCampo);
        } // Adicione outras verificações conforme necessário

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

                // Faça algo após a exclusão, como redirecionar para outra página, etc.
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
                body: JSON.stringify(dataSend), // Dados a serem enviados para o backend

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
                            name={campo.label}
                            onChange={(valor) => handleChangeCampo(campo.label, valor, campo.tipoValue)}
                        />
                    );

                }
                return null;
            })}
            <button type="submit" className="formsEnviar">Enviar</button>
            <button type="button" className="formsExcluir" onClick={handleDelete}>Excluir</button>
        </form>
    );
};

export default FormsAlterar;
