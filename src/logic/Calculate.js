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
    || buttonName === '÷'
    || buttonName === '%'
  ) {
    return {
      total: `${next}`,
      next: null,
      operation: buttonName,
    };
  }
  if (buttonName === '=') {
    if (total === null) {
      return { next, total, operation };
    }
    return {
      total: `${operate(total, next, operation)}`,
      next: `${operate(total, next, operation)}`,
      operation: null,
    };
  }
  if (buttonName === '.') {
    if (next === null) {
      return {
        next: `${0}${buttonName}`,
        total,
        operation,
      };
    }
    if (!next.toString().includes('.')) {
      return {
        next: `${next}${buttonName}`,
        total,
        operation,
      };
    }
  }
  if (next === null) {
    return {
      next: parseFloat(`${buttonName}`, 10),
      total,
      operation,
    };
  }
  return { next: parseFloat(`${next}${buttonName}`, 10), operation, total };
};

export default Calculate;
