import React from 'react';

export default props => {
    return (
        <div>
            <label htmlFor="pass">Passo:</label>
            <input
                type="number"
                value={props.passo}
                id="pass"
                onChange={e => props.alterarPasso(+e.target.value)}
            />
        </div>
    )
}