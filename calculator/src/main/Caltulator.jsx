/* eslint-disable default-case */
import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from './Display';


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: false,
    values: [0, 0],
    current: 0
}
export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    state = { ...initialState }

    clearMemory() {
        this.setState({ ...initialState });
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({
                operation,
                current: 1,
                clearDisplay: true
            });
        }
        else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;

            const values = [...this.state.values];
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
            }
            catch (e) {
                values[0] = this.state.values[0];
            }

            values[1] = 0;

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay;

        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({
            displayValue,
            clearDisplay: false
        });

        if (n !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values });
        }
    }

    backspace() {
        const i = this.state.current;
        const digit = this.state.values[i].toString();
        const values = [...this.state.values];
        const res = isNaN(parseInt(digit.substr(0, digit.length - 1))) ? 0 : parseInt(digit.substr(0, digit.length - 1));
        values[i] = res;
        const displayValue = res.toString();
        this.setState({ values, displayValue });
    }

    detectKeyDigited(e) {
        let keyVal;
        if (e.key === "Enter") keyVal = "=";
        else keyVal = e.key;

        switch (keyVal) {
            case "Escape":
                this.clearMemory();
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case ".":
                this.addDigit(keyVal);
                break;
            case "/":
            case "*":
            case "+":
            case "-":
            case "=":
                this.setOperation(keyVal);
                break;
            case "Backspace":
                this.backspace();
                break;
        }
    }

    componentDidMount = _ => {
        window.onkeyup = (e) => {
            this.detectKeyDigited(e);
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display display={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}