import React from "react";
import Quote from "../Quote";
import renderer from "react-test-renderer";

describe("The Quote", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
