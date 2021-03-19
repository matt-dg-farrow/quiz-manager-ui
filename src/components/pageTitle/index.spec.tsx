import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import PageTitle from ".";

describe("The PageTitle component", () => {
  const wrapper = shallow(<PageTitle text="Title" />);

  it("should contain the correct number of components", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
