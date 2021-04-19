import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('The Quote', () => {
  it('renders as expected matching snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
