import React from 'react'
import './Button.css';

export default props =>
    <button
        //evento {dentro props.nomeEvento}
        onClick={_ => props.click && props.click(props.label)}
        className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>
        {props.label}
    </button>