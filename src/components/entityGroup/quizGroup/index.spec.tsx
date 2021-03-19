import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import QuizGroup from ".";
import { Quiz } from "../../../globals/types";

const quizzes: Quiz[] = [
  {
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
  },
];

describe("The QuizGroup component", () => {
  const wrapper = shallow(<QuizGroup quizData={quizzes} />);

  it("should contain the correct number of components", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
