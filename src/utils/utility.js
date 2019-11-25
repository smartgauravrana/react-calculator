import { OPERATORS } from './constant';

export const isValidExpression = (key, expression) => {
    const lastSymbol = expression.length>0 ? expression.split('')[expression.length-1]: '';
    let {allClear, ...operatorsObj } = OPERATORS;
    let operators = Object.values(operatorsObj);
    return (expression ==='' && operators.includes(key)) || (operators.includes(lastSymbol) && operators.includes(key)) ? false: true;
}
