import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import Footer from ".";

describe("The Header component", () => {
  const wrapper = shallow(<Footer />);

  it("should contain the correct number of components", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
