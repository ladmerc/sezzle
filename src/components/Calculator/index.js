import React, { Component } from 'react';
import { evaluate, format } from 'mathjs';
import KeyPad from './KeyPad';

import './style.css';

class Calculator extends Component {
  state = {
    expression: '',
    result: ''
  }

  static DECIMAL_PLACES = 10

  handleClear = () => {
    this.setState({ expression: '', result: '' });
  }

  handleDelete = () => {
    this.setState({
      expression: this.state.expression.slice(0, -1),
      result: ''
    })
  }

  handleInput = (val) => {
    this.setState({
      expression: `${this.state.expression}${val.replace('/', '÷')}`,
      result: ''
     })
  }

  handleDecimalPress = () => {
    this.handleInput('.');
  }

  doCalculation = () => {
    const { expression } = this.state;
    if (!expression) return;

    const result = evaluate(expression.replace('÷', '/'))
    this.setState({ 
      result: format(result, { precision: Calculator.DECIMAL_PLACES }) 
    })
  }

  render = () => {
    const { expression, result } = this.state;

    return (
      <div className="col-sm-6 m-auto">
        <div className="display">
          <div className="pb-2">{expression}</div>
          <div className="pb-2 font-weight-bold">{result}</div>
        </div>
        <hr />
        <KeyPad
          onClearPress={this.handleClear}
          onDeletePress={this.handleDelete}
          onOperatorPress={this.handleInput}
          onNumberPress={this.handleInput}
          onDecimalPress={this.handleDecimalPress}
          onToggleSignPress={false}
          onEqualsPress={this.doCalculation}
        />
      </div>
    )
  }
}

export default Calculator