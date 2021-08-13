import React from 'react';
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import './App.css';


export default props => {

    return (
        <div className="App">
            <h1>Exercise React-Redux (Simple)</h1>
            <div className="linha">
                <Intervalo></Intervalo>
            </div>
            <div className="linha">
                <Media></Media>
                <Soma></Soma>
                <Sorteio></Sorteio>
            </div>
        </div>
    )
}