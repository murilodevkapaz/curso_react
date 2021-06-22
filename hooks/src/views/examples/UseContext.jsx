import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle';

import DataContext from '../../data/DataContext';

const UseContext = (props) => {

    const context = useContext(DataContext);

    function addNumber(delta){
        context.setState({
            ...context.state,//pega todos os atributos do state atual
            number: context.state.number +delta//e só altera o valor do atributo "Number"
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
            </div>

            <div>
                <button className="btn" onClick={_=>  addNumber(1)}>+1</button>
                <button className="btn" onClick={_=>  addNumber(-1)}>-1</button>
            </div>
        </div>
    )
}

export default UseContext
