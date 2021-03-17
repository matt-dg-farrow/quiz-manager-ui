import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import Button from ".";

describe("The Header component", () => {
  const wrapper = shallow(<Button name="Button" type="submit" />);

  it("should contain the correct number of components", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
