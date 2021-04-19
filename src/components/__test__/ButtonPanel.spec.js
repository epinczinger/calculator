import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../ButtonPanel';

describe('ButtonPannel component', () => {
  it('renders as expected matching snapshot', () => {
    const buttonPanel = renderer.create(<ButtonPanel clickHandler={Function} />).toJSON();
    expect(buttonPanel).toMatchSnapshot();
  });
});
