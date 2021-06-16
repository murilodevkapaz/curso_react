import React, { useState } from 'react';
import './Input.css';

export default props => {
    //states 
    const [value, setValue] = useState('inicial');

    function onChange(e) {
        setValue(e.target.value);
    }
    return (
        <div class="input">

            <h2>{value}</h2>

            <div style={{display: "flex", flexDirection:"column"}}>
                <input
                    type="text"
                    value={value}
                    onChange={e => onChange(e)}
                />
                <input
                    type="text"
                    value={value}
                    readOnly
                />
                <input value={undefined}/>
            </div>

        </div>
    )
}
