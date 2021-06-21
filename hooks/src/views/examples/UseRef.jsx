import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = (props) => {
    //states
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [acum, setAcum] = useState("");

    //hooks 
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    //faz alteração na primeira
    // count.current++;

    //ou

    useEffect((e) => {
        //só altera quando digitado
        count.current++;
        myInput2.current.focus();
        const lastValueDigited = myInput1.current.value.substr(-1);
        setAcum(acum => acum + lastValueDigited);
    }, [value1]);

    useEffect(() => {
        count.current++;
        myInput1.current.focus();
        const lastValueDigited = myInput2.current.value.substr(-1);
        setAcum(acum => acum + lastValueDigited);
    }, [value2]);

    //render
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{acum} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input
                    ref={myInput1}
                    type="text"
                    className="input"
                    value={value1}
                    onChange={e => setValue1(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input
                    ref={myInput2}
                    type="text"
                    className="input"
                    value={value2}
                    onChange={e => setValue2(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseRef
