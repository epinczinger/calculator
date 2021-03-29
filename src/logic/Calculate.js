import operate from './Operate';

const Calculate = (dataObject, buttonName) => {
  const { total, next, operation } = dataObject;

  if (buttonName === '+/-') {
    return {
      total: total * -1,
      next: next * -1,
      operation: '+/-',
    };
  }
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  if (
    buttonName === '+'
    || buttonName === '-'
    || buttonName === 'x'
  ) {
    return {
      total: `${operate(next, total, operation)}`,
      next: 0,
      operation: buttonName,
    };
  }
  if (buttonName === '÷') {
    return {
      total: `${operate(next, total, operation)}`,
      next: '',
      operation: buttonName,
    };
  }
  if (buttonName === '%') {
    return {
      total: `${operate(next, total, operation)}`,
      next: null,
      operation: buttonName,
    };
  }
  if (buttonName === '=') {
    return {
      total: `${operate(next, total, operation)}`,
      next: null,
      operation: null,
    };
  }

  if (next === null) {
    return {
      next: parseFloat(`${buttonName}`, 10),
    };
  }

  return { next: parseFloat(`${next}${buttonName}`, 10), operation, total };
};

export default Calculate;
