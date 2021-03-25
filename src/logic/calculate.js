import operate from './operate';

const calculate = (dataObject, buttonName) => {
  const { total, next, operation } = dataObject;

  if (buttonName === '+/-') {
    return {
      total: total * -1,
      next: next * -1,
      operation: '+/-',
    };
  } if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  } if (buttonName === '+'
     || buttonName === '-'
     || buttonName === '*'
     || buttonName === '÷'
     || buttonName === '%') {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: buttonName,
    };
  } if (buttonName === '=') {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }

  return {
    total: null,
    next: null,
    operation: null,
  };
};

export default calculate;
