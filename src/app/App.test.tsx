import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import App from "./App";

describe("The Header component", () => {
  const wrapper = shallow(<App />);

  it("should contain the correct number of components", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
