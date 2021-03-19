import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import AnswerGroup from ".";
import { Answer } from "../../../globals/types";

const answers: Answer[] = [{ id: 3, text: "Answer 1", isCorrect: true }];

describe("The QuestionItem component", () => {
  const wrapper = shallow(<AnswerGroup answerData={answers} />);

  it("should contain the correct number of components", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
