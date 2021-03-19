import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import Router from ".";

describe("The Router component", () => {
  const wrapper = shallow(<Router />);

  it("should contain the correct number of components", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
