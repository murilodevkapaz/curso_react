import React from 'react';
import DiretaFilho from './DiretaFilhos';
export default props => {
    
    return(
        <div>
            <DiretaFilho 
                texto="filho 1"
                numero={20}
                bool={true} />
                            <DiretaFilho 
                texto="filho 2"
                numero={17}
                bool={false} />
        </div>
    )
}