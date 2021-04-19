import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

describe('The Button', () => {
    it('renders as expected matching snapshot', () => {
        const tree = renderer.create(<Button name='AC' clickHandler={Function} />).toJSON();
        expect(tree).toMatchSnapshot();
    } )
});