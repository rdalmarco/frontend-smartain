import React, { useState } from 'react';
import { useTable, usePagination } from 'react-table';
import '../css/layoutConsulta.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import FormsAlterar from "./formsAlterar";

function LayoutConsulta({ titulo, valorUrlAdicionar, dados  }) {
    const [filterValue, setFilterValue] = useState('');
    const [selectedField, setSelectedField] = useState('');

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    };

    const handleFieldChange = (e) => {
        setSelectedField(e.target.value);
    };

    const columns = React.useMemo(
        () =>
            dados.length > 0
                ? Object.keys(dados[0][0]).map(chave => {
                    return {
                        Header: chave,
                        accessor: chave,
                    };
                })
                : [],
        [dados]
    );

    const filteredData = React.useMemo(() => {
        if (selectedField && filterValue) {
            return dados[0].filter(item =>
                String(item[selectedField]).toLowerCase().includes(filterValue.toLowerCase())
            );
        }
        return dados[0];
    }, [selectedField, filterValue, dados]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page, // Substitua 'rows' por 'page'
        prepareRow,
        state: { pageIndex, pageSize }, // Adicione o state para controle da paginação
        gotoPage,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        pageCount,
    } = useTable(
        {
            columns,
            data: filteredData,
            initialState: { pageIndex: 0, pageSize: 10},
        },
        usePagination
    );

    return (
        <div className="containerConsulta">
            <h1 className="tittleConsulta">{titulo}</h1>
            <div className="filtro">
                <select
                    value={selectedField}
                    onChange={handleFieldChange}
                >
                    <option value="">Selecione um campo</option>
                    {columns.map(column => (
                        <option key={column.id} value={column.accessor}>
                            {column.Header}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    value={filterValue}
                    onChange={handleFilterChange}
                    placeholder="Digite o valor de filtragem"
                />
                <Link to={`/cadastros/${valorUrlAdicionar}/cadastrar`}>
                    <button className="adicionar">Adicionar</button>
                </Link>
            </div>
            <div>
                <table {...getTableProps()} className="table">
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr
                                key={row.original.Id}
                                {...row.getRowProps()}
                                className={`${row.isSelected ? 'selecionada' : ''} clickable-row`}
                                onClick={() => {
                                    const id = row.original.Id;
                                    window.location.href = `/cadastros/${valorUrlAdicionar}/alterar/${id}`;
                                }}
                            >
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            <div className="pager">
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <span>
          Página{' '}
                    <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{' '}
        </span>
                <span>
        </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
            </div>
        </div>
    );
}

export default LayoutConsulta;
