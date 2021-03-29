import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = numberOne == null ? new Big('0') : new Big(numberOne);
  const num2 = numberTwo == null ? new Big('0') : new Big(numberTwo);
  let total = 0;

  switch (operation) {
    case '+':
      total = num1.plus(num2);
      break;
    case '-':
      total = num1.minus(num2);
      break;
    case 'x':
      total = num1.times(num2);
      break;
    case '÷':
      total = num2 === 0 ? 'Zero division Error' : num1.div(num2);
      break;
    case '%':
      total = num1.div(100);
      break;
    default:
      total = num1;
  }

  return total;
};

export default operate;
