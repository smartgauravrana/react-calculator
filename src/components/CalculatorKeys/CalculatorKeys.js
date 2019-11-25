import React from 'react';

const CalculatorKeys = ({ handleKeyPressed }) => {
    return (
        <div className="calculator-keys">

        <button type="button" className="operator" value="+" onClick={(event) => handleKeyPressed(event.target.value)}>+</button>
        <button type="button" className="operator" value="-" onClick={(event) => handleKeyPressed(event.target.value)}>-</button>
        <button type="button" className="operator" value="*" onClick={(event) => handleKeyPressed(event.target.value)}>&times;</button>
        <button type="button" className="operator" value="/" onClick={(event) => handleKeyPressed(event.target.value)}>&divide;</button>

        <button type="button" value="7" onClick={(event) => handleKeyPressed(event.target.value)}>7</button>
        <button type="button" value="8" onClick={(event) => handleKeyPressed(event.target.value)}>8</button>
        <button type="button" value="9" onClick={(event) => handleKeyPressed(event.target.value)}>9</button>


        <button type="button" value="4" onClick={(event) => handleKeyPressed(event.target.value)}>4</button>
        <button type="button" value="5" onClick={(event) => handleKeyPressed(event.target.value)}>5</button>
        <button type="button" value="6" onClick={(event) => handleKeyPressed(event.target.value)}>6</button>


        <button type="button" value="1" onClick={(event) => handleKeyPressed(event.target.value)}>1</button>
        <button type="button" value="2" onClick={(event) => handleKeyPressed(event.target.value)}>2</button>
        <button type="button" value="3" onClick={(event) => handleKeyPressed(event.target.value)}>3</button>


        <button type="button" value="0" onClick={(event) => handleKeyPressed(event.target.value)}>0</button>
        <button type="button" className="decimal" value="." onClick={(event) => handleKeyPressed(event.target.value)}>.</button>
        <button type="button" className="all-clear" value="all-clear" onClick={(event) => handleKeyPressed(event.target.value)}>AC</button>

        <button type="button" className="equal-sign" value="=" onClick={(event) => handleKeyPressed(event.target.value)}>=</button>

      </div>
    );
}

export default CalculatorKeys;