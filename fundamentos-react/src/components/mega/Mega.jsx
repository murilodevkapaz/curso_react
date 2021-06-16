import React, {useState} from 'react';
// import generateNumbers from './generateNumbers';

export default _ => {
    //states
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [qtd, setQtd] = useState(0);
    const [result, setResult] = useState(0);

    //functions 
    function generateNumbers(qtd, min, max){
        let arrayNumbers = [];
    
        for (let i = 0; i < qtd; i++) {
            const randomValue = parseInt(Math.random() * (max - min) + min);
            let numExists = arrayNumbers.some(val => val == randomValue);
            if(!numExists) arrayNumbers.push(randomValue);
            else --i;
        }
    
        setResult(arrayNumbers.join(' '));
    }

    return (
        <>
            <input type="number" value={minValue} onChange={e=> setMinValue(+e.target.value)} placeholder="min value" />
            <input type="number" value={maxValue} onChange={e=> setMaxValue(+e.target.value)} placeholder="max value" />
            <input type="number" value={qtd} onChange={e=> setQtd(+e.target.value)} placeholder="qtd of numbers" />
            <button type="button" onClick={_=>generateNumbers(qtd, minValue, maxValue)}>Generate!</button>
            <p>Numbers generated: {result}</p>
        </>
    )
}