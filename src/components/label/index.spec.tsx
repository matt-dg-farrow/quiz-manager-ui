import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import Label from ".";

describe("The Label component", () => {
  const wrapper = shallow(<Label name="name" />);

  it("should contain the correct number of components", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
