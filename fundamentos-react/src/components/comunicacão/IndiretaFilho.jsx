import React from 'react';

export default props => {

    const randomAge = ()=> parseInt(Math.random()*(20))+50;

    return (
        <div>
            <div>
                filho
        </div>
            <button
                type="text"
                onClick={_ => props.quandoclicar("João", randomAge, true)}>
                forncer Informações
                </button>
        </div>
    )
}
