import React from 'react';

export default props => {
    const elseChild = Array.from(props.children).filter(child => {
        return child.type && child.type.name === 'Else';
    })[0];

    const ifChildren = Array.from(props.children).filter(child => {
        return child !== elseChild;
    })[0];

    if (props.test) {
        return ifChildren;
        //retorna o children do componente caso condição verdadeira
    }
    else if(elseChild){
        return elseChild;
    }
    else {
        return false;
    }
}

export const Else = props => props.children;