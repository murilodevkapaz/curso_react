import React, { Component } from 'react';
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';
import './contador.css';

export default class Contador extends Component {

    //states
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    alterarPasso = (novoPasso) => {
        this.setState({
            passo: parseInt(novoPasso)
        })
    }

    //o html que será renderizado
    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                {/* para obter os props enviados*/}
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} alterarPasso={this.alterarPasso}/>
                <Botoes incrementar={this.incrementar} decrementar={this.decrementar}/>


            </div>
        )
    }
}