import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import QuizItem from ".";
import { Quiz } from "../../../globals/types";

const quiz: Quiz = {
  id: 1,
  title: "Quiz 1",
  questions: [
    {
      id: 2,
      title: "Question 1",
      answers: [
        { id: 3, text: "Answer 1", isCorrect: true },
        { id: 4, text: "Answer 1", isCorrect: true },
        { id: 5, text: "Answer 1", isCorrect: true },
      ],
    },
  ],
};

describe("The QuizItem component", () => {
  it("should contain the correct number of components in list view", () => {
    const wrapper = shallow(<QuizItem quiz={quiz} view="list" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should contain the correct number of components in single view", () => {
    const wrapper = shallow(<QuizItem quiz={quiz} view="list" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
