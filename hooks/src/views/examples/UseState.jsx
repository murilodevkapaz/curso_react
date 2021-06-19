import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {
    //states
    const [count, setCount] = useState(0);
    const [name, setName] = useState("xxx");

    //render  
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span class="text">{count}</span>
                <div>
                    <button className="btn" onClick={_=> setCount(count-1)}>-1</button>
                    <button className="btn" onClick={_=> setCount(count+1)}>+1</button>
                    <button className="btn" onClick={_=> setCount(1000)}>1000</button>
                    <button className="btn" onClick={_=> setCount(current=>current+1000)}>+1000</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <input type="text" className="input" value={name} onChange={e=>setName(e.target.value)} />

            <span className="text">{name}</span>
        </div>
    )
}

export default UseState
