import React from 'react'
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';



const UseRef = (props) => {
    //state
    const [count, inc, dec] = useCounter();

    //hooks
    const url = "http://files.cod3r.com.br/curso-react/estados.json";

    const response = useFetch(url);

    function showStates(states){
        return states.map((state,i)=><li key={i}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={_=>inc()}>Inc</button>
                    <button className="btn" onClick={_=>dec()}>Dec</button>
                </div>
            </div>
            
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <ul>
                    {!response.loading? showStates(response.data): false}
                </ul>
            </div>

        </div>
    )
}

export default UseRef
