import React from "react";
import Calculator from "../Calculator";
import renderer from "react-test-renderer";

describe('Calculator component', () => {
    it('renders as expected matching snapshot', () => {
        const CalculatorTest = renderer.create(<Calculator/>).toJSON();
        expect(CalculatorTest).toMatchSnapshot();
    })
})
