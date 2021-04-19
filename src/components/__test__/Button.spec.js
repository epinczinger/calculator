import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('The Button', () => {
  it('renders as expected matching snapshot', () => {
    const tree = renderer.create(<Button name="AC" clickHandler={Function} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
