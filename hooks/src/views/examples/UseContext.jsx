import React, {useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

import DataContext from '../../data/DataContext';
import { AppContext } from '../../data/Store';

const UseContext = (props) => {

    const context = useContext(DataContext);
    const {text, setText, number, setNumber } = useContext(AppContext);

    function addNumber(delta) {
        context.setState({
            ...context.state,//pega todos os atributos do state atual
            number: context.state.number + delta//e só altera o valor do atributo "Number"
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
                <button className="btn" onClick={_ => addNumber(1)}>+1</button>
                <button className="btn" onClick={_ => addNumber(-1)}>-1</button>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={_ => setNumber(number - 1)}>-1</button>
                    <button className="btn" onClick={_ => setNumber(number + 1)}>+1</button>

                </div>
            </div>
        </div>
    )
}

export default UseContext
