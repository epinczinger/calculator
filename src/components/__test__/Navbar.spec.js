import React from "react";
import Navbar from "../Navbar";
import renderer from "react-test-renderer";

describe("The Navbar", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
