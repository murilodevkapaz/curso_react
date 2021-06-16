import React from 'react';
import products from '../data/produtos';
import './tabelaProdutos.css';

export default _ => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(prod => {
                        return (
                            <tr key={prod.id}>
                                <td>{prod.id}</td>
                                <td>{prod.nome}</td>
                                <td>R$ {prod.preco.toFixed(2)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}