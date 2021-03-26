import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  let total;

  switch (operation) {
    case '+':
      total = num1.plus(num2);
      break;
    case '-':
      total = num1.minus(num2);
      break;
    case '*':
      total = num1.times(num2);
      break;
    case '÷':
      total = num2 === 0 ? 'Zero division Error' : num1.div(num2);
      break;
    case '%':
      total = num1.div(100);
      break;
    default:
      total = 'something';
  }

  return total;
};

export default operate;
