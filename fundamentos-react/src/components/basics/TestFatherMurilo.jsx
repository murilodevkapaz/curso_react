import React, { cloneElement } from 'react';

export default props =>
        <ul>
                {
                        props.children.map((child, i)=>{
                                return cloneElement(child, {...props, key: i});
                        })
                }
        </ul>
