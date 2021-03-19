import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { Provider } from "react-redux";
import QuizEntityPage from ".";
import configureStore from "redux-mock-store";
import { Quiz } from "../../../globals/types";
import { IFetchQuizInitialState } from "../redux/model";

describe("The QuizEntityPage component", () => {
  const actionPayload: Quiz = {
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

  const populatedInitialState: IFetchQuizInitialState = {
    quizzes: [actionPayload],
  };

  const initialStoreState = { FetchQuizDataReducer: populatedInitialState };

  const mockStore = configureStore();
  const store = mockStore(initialStoreState);
  const wrapper = shallow(
    <Provider store={store}>
      <QuizEntityPage quizId="1" />
    </Provider>
  );

  it("should contain the correct number of components", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
