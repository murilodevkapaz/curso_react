import React, {useMemo, useState} from 'react';

export default _ => {
    const [randomValue, setRandomValue] = useState();
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1);

    function createRandomValue(){
        const min = parseInt(minValue);
        const max = parseInt(maxValue);
        const valRandom =Math.floor(Math.random() * (max - min) ) + min;
        setRandomValue(valRandom);
    }

    useMemo(_=>{
        const max = parseInt(maxValue);
        const min = parseInt(minValue);
        if(max<=min){
            setMaxValue(min+1);
        }
    },[minValue,maxValue])

    return (
        <>
            <h3>Aleatório</h3>
            <input type="number" onChange={e => setMinValue(e.target.value)} placeholder="min value" value={minValue}/>

            <input type="number" onChange={e => setMaxValue(e.target.value)} placeholder="max value" value={maxValue}/>

            <button type="button" onClick={createRandomValue}>create random</button>

            <p>Result: {randomValue}</p>


        </>
    )
}