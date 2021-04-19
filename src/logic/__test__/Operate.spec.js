import operate from '../Operate';

describe('Return proper result when operating 2 numbers', () => {
  it('test addition', () => {
    expect(operate(2, 2, '+').toString()).toEqual('4');
  });
  it('test subtraction', () => {
    expect(operate(3, 2, '-').toString()).toEqual('1');
  });
  it('test multiplication', () => {
    expect(operate(3, 3, 'x').toString()).toEqual('9');
  });
  it('test division', () => {
    expect(operate(5, 2, '÷').toString()).toEqual('2.5');
  });
  it('test percentage', () => {
    expect(operate(3, null, '%').toString()).toEqual('0.03');
  });
});
