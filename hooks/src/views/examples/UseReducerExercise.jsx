import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    num: 0
}

function reducer(currentState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "multiplyBy7":
            return { ...currentState, num: currentState.num * 7 };
        case "divideBy25":
            return { ...currentState, num: currentState.num / 25 };
        case "round":
            return { ...currentState, num: Math.floor(currentState.num) };
        case "addNumber":
            return { ...currentState, num: parseFloat(currentState.num) + action.payload };
    }
}

const UseReducerExercice = (props) => {
    //states
    const [inputNumber, setInputNumber] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    function onChangeInput(n) {
        debugger
        const eFormatted = !n ? 0 : parseInt(n);
        setInputNumber(eFormatted);
    }
    function onBlurInput() {
        dispatch({ type: "addNumber", payload: inputNumber });
    }

    //render
    return (
        <div className="UseReducerExercice">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Exercício Reducer"
            />

            <div className="center">
                <span className="text">{state.num}</span>
                <div>
                    <button className="btn" onClick={_ => dispatch({ type: "multiplyBy7" })}>*7</button>
                    <button className="btn" onClick={_ => dispatch({ type: "divideBy25" })}>/25</button>
                    <button className="btn" onClick={_ => dispatch({ type: "round" })}>Round</button>
                </div>
                <div>
                    <input type="number" className="input" onChange={e => onChangeInput(e.target.value)} value={inputNumber} onBlur={onBlurInput} />
                </div>
            </div>
        </div>
    )
}

export default UseReducerExercice
