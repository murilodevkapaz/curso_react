import React, { useState } from 'react';
import './testEventoCond.css';

export default _ => {
    //states
    const [changeState, setChangeState] = useState(true);

    function onClick() {
        setChangeState(!changeState);
    }

    return (
        <>
            <button className="button-styled" type="button" onClick={onClick}>Click</button>
            {
                changeState ?
                    <div>On</div> :
                    <div>Off</div>
            }
        </>
    )
}
