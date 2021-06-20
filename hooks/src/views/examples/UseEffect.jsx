import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';


function calcFatorial(num) {
    const n = parseInt(num);
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
    //states
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [evenOrOdd, setEvenOrOdd] = useState("Even");
    const [inputEvenOrOdd, setInputEvenOrOdd] = useState(1);
    //hooks
    useEffect(() => {
        setFatorial(calcFatorial(number));
    }, [number]);

    useEffect(() => {
        if (fatorial > 1000000) {
            document.title = "Wow!!!";
        }
    }, [fatorial]);

    useEffect(() => {
        setEvenOrOdd(inputEvenOrOdd % 2 === 0 ? "Even": "Odd");
    },[inputEvenOrOdd]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />

            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? "it don't exists" : fatorial}</span>
                </div>

                <input
                    className="input"
                    type="number"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercício #01" />

            <div className="center">
                <div>
                    <span className="text">Status:</span>
                    <span className="text red">{evenOrOdd}</span>
                </div>

                <input
                    type="number"
                    className="input"
                    value={inputEvenOrOdd}
                    onChange={e => setInputEvenOrOdd(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseEffect
