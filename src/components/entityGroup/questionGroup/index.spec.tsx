import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import QuestionGroup from ".";
import { Question } from "../../../globals/types";

const questions: Question[] = [
  {
    id: 2,
    title: "Question 1",
    answers: [
      { id: 3, text: "Answer 1", isCorrect: true },
      { id: 4, text: "Answer 1", isCorrect: true },
      { id: 5, text: "Answer 1", isCorrect: true },
    ],
  },
];

describe("The QuestionGroup component", () => {
  const wrapper = shallow(<QuestionGroup questionData={questions} />);

  it("should contain the correct number of components", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
