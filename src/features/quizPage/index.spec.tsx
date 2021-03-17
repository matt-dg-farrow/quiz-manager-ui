import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import QuizPage from ".";

describe("The Header component", () => {
  const wrapper = shallow(<QuizPage />);

  it("should contain the correct number of components", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
