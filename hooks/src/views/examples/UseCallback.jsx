import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButton from './UseCallbackButtons';

const UseCallback = (props) => {
    //states
    const [count, setCount] = useState(0);

    const inc = useCallback((delta) => {
        setCount(count => count + delta);
    },[setCount]);

    // function inc(delta) {
    //     setCount(count + delta);
    // }


    //render
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButton inc={inc} />

            </div>
        </div>
    )
}

export default UseCallback
