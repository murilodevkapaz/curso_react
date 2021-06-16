import React, { cloneElement } from 'react';


export default props=>{
    return (
        <div>
            {
                //passa as propriedades de um componente pai para um componente filho
                // React.Children.map(props.children, el => (
                //     cloneElement(el, props)
                // ))

                //ou 
                
                props.children.map((child, i)=> cloneElement(child, {...props, key:i}))
            }
        </div>
    )
}