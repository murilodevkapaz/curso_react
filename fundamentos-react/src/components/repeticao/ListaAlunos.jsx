import React from 'react';
import data from '../data/alunos';

export default props =>{

    return (
        <div>
            <ul style={{listStyle: "none"}}>{
                    data.map((el, i)=>{
                        return <li key={el.id}>{el.id}){el.nome} - {el.nota}</li>
                    })
                }
            </ul>
        </div>
    )
}