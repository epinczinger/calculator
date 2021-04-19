import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('The Home', () => {
  it('renders as expected matching snapshot', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
