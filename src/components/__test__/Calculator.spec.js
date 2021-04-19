import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Calculator component', () => {
  it('renders as expected matching snapshot', () => {
    const CalculatorTest = renderer.create(<Calculator />).toJSON();
    expect(CalculatorTest).toMatchSnapshot();
  });
});
