import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { evaluate, format } from 'mathjs';
import KeyPad from './KeyPad';

import './style.css';

class Calculator extends PureComponent {
  state = {
    expression: '',
    result: ''
  }

  static DECIMAL_PLACES = 10
  
  componentDidMount = () => {
    document.addEventListener('keypress', this.setUpKeyBindings);
  }

  setUpKeyBindings = ({ key }) => {
    if (/[0-9]/.test(key)) return this.handleInput(key);
    if (['+', '-', '*', '/'].includes(key)) return this.handleInput(key);
    if (['=', 'Enter'].includes(key)) return this.doCalculation();
    if (['Backspace', 'Delete'].includes(key)) return this.handleDelete();
    if (key === 'c') return this.handleClear();
    if (key === '.') return this.handleDecimalPress();
  }

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

    const evaluated = evaluate(expression.replace('÷', '/'))
    const result = format(evaluated, { precision: Calculator.DECIMAL_PLACES });
    this.setState({ 
      result
    }, () => {
      this.props.onCalculate({ expression, result })
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
  
  componentWillUnmount = () => {
    document.removeEventListener('keypress', this.setUpKeyBindings);
  }
}

Calculator.propTypes = {
  onCalculate: PropTypes.func
};

export default Calculator