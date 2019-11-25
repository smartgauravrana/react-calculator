import React, { Component } from 'react';

import './App.css';
import CalculatorKeys from './components/CalculatorKeys/CalculatorKeys';
import { OPERATORS } from './utils/constant';
import { isValidExpression } from './utils/utility';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }

    this.handleKeyPressed = this.handleKeyPressed.bind(this);
  }

  handleKeyPressed(key){
    let regex = /^[-+\/*]?\d+[-+\/*]{1}\d+$/g;
    const {allClear, equal, decimal, ...operatorObj} = OPERATORS;
    const operators = Object.values(operatorObj);
    let value = this.state.value;
    if(operators.includes(key) && regex.test(this.state.value)){
      value = eval(this.state.value);
    }

    if(isValidExpression(key, this.state.value)){
      switch(key){
        case OPERATORS.allClear: return this.setState({ value: '' });
        case OPERATORS.add: return this.setState(state => ({ value: value + key}));
        case OPERATORS.multiply: return this.setState(state => ({ value: value + key}));
        case OPERATORS.minus: return this.setState(state => ({ value: value + key}));
        case OPERATORS.division: return this.setState(state => ({ value: value + key}));
        case OPERATORS.decimal: return this.setState(state => ({ value: state.value + key}));
        case OPERATORS.equal: if(regex.test(this.state.value)){
              let result = eval(this.state.value)
              this.setState({ value: result});
            }
            break;
        default: return this.setState(state => ({ value: state.value + key}));
      }
    }
    
  }

  render(){
    return (
      <div className="calculator">  
        <input type="text" className="calculator-screen" value={this.state.value} placeholder="0" disabled />  
        <CalculatorKeys 
          handleKeyPressed={this.handleKeyPressed}
        />      
      </div>
    );
  }
}

export default App;