import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer} from '../../store/index';
import {numberAdd2} from '../../store/actions/number';

const UseReducer = _ => {
    //states
    const [state, dispatch] = useReducer(reducer, initialState);

    //render
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {
                    state.user
                        ?
                        <span className="text">{state.user.name}</span>
                        :
                        <span className="text">Sem usuário</span>

                }

                <span className="text">{state.number}</span>
                <div>
                    <button
                        className="btn"
                        onClick={_ => dispatch({ type: "login", payload: "Maria" })}
                    >Login</button>

                    <button
                        className="btn"
                        onClick={_ =>  numberAdd2(dispatch)}
                    >+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
