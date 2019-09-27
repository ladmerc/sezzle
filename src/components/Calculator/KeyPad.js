import React from 'react';
import PropTypes from 'prop-types';


const KeyPad = function({ onNumberPress, onOperatorPress, ...props }) {
  const handleNumberPress = (e) => onNumberPress(e.target.value);
  const handleOperatorPress = (e) => onOperatorPress(e.target.value);
  
  return (
    <div className='keypad'>
      <div>
        <button
          className='btn'
          value='clear'
          onClick={props.onClearPress}
        >
          C
        </button>
        <button
          className='btn'
          value='backspace'
          onClick={props.onDeletePress}
        >
          {'<'}
        </button>
        <button
          className='btn'
          value='/'
          onClick={handleOperatorPress}
        >
          &divide;
        </button>
      </div>
      <div>
        <button
          className='btn'
          value='7'
          onClick={handleNumberPress}
        >
          7
        </button>
        <button
          className='btn'
          value='8'
          onClick={handleNumberPress}
        >
          8
        </button>
        <button
          className='btn'
          value='9'
          onClick={handleNumberPress}
        >
          9
        </button>
        <button
          className='btn'
          value='*'
          onClick={handleOperatorPress}
        >
          &times;
        </button>
      </div>
      <div>
        <button
          className='btn'
          value='4'
          onClick={handleNumberPress}
        >
          4
        </button>
        <button
          className='btn'
          value='5'
          onClick={handleNumberPress}
        >
          5
        </button>
        <button
          className='btn'
          value='6'
          onClick={handleNumberPress}
        >
          6
        </button>
        <button
          className='btn'
          value='-'
          onClick={handleOperatorPress}
        >
          &minus;
        </button>
      </div>
      <div>
        <button
          className='btn'
          value='1'
          onClick={handleNumberPress}
        >
          1
        </button>
        <button
          className='btn'
          value='2'
          onClick={handleNumberPress}
        >
          2
        </button>
        <button
          className='btn'
          value='3'
          onClick={handleNumberPress}
        >
          3
        </button>
        <button
          className='btn'
          value='+'
          onClick={handleOperatorPress}
        >
          &#43;
        </button>
      </div>
      <div>
        {false &&
          <button
            className='btn'
            value='+/_'
            onClick={props.onToggleSign}
          >
            &plusmn;
          </button>
        }
        <button
          className='btn'
          value='0'
          onClick={handleNumberPress}
        >
          0
        </button>
        <button
          className='btn'
          value='.'
          onClick={props.onDecimalPress}
        >
          .
        </button>
        <button
          className='btn'
          value='='
          onClick={props.onEqualsPress}
        >
          =
        </button>
      </div>
    </div>
  );
};

const isRequiredFunc = PropTypes.func.isRequired;

KeyPad.propTypes = {
  onClearPress: isRequiredFunc,
  onDeletePress: isRequiredFunc,
  onOperatorPress: isRequiredFunc,
  onNumberPress: isRequiredFunc,
  onDecimalPress: isRequiredFunc,
  onToggleSign: PropTypes.func,
  onEqualsPress: isRequiredFunc
};

export default KeyPad;
