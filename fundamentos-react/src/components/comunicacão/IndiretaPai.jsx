import React, {useState} from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props=>{
    //states 
    const [getName, setName] = useState('?');
    const [age, setAge] = useState('?');
    const [nerd, setNerd] = useState('?');

    function fornecerInformacoes(name, age, nerd){
       setName(name);
       setAge(age);
       setNerd(nerd?'É nerd!': 'Não é Nerd');
    }

    return(
        <div>
            Pai: 
            <span> {getName} </span>
            <span><strong>{age}</strong></span>
            <span> {nerd}</span>
            <IndiretaFilho quandoclicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}