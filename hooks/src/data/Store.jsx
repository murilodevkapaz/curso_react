import React, { useState } from 'react';

const initialState = {
    number: 1234,
    text: "Context API + Hooks"
}

export const AppContext = React.createContext(initialState);

const Store = props => {
    //state 
    const [state, setState] = useState(initialState);

    //functions
    function updateState(key, val){
        setState({
            ...state,//lança todo objeto dentro do estado
            [key]: val
        })
    }//dessa forma modifica o objeto para modificar apenas um atributo

    //render
    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n=> updateState('number', n),
            setText: n=> updateState('text', n)
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store;