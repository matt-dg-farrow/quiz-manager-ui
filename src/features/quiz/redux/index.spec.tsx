import configureStore from "redux-mock-store";
import { takeLatest } from "redux-saga/effects";
import { QuizRequestTypes } from "../../../globals";
import { Quiz } from "../../../globals/types";
import sinon from "sinon";
import {
  CreateQuizAction,
  DeleteQuizAction,
  EditQuizAction,
  FetchQuizDataAction,
  FetchQuizDataActionFailure,
  FetchQuizDataActionSuccess,
} from "./action";
import { FetchQuizRequestAction, IFetchQuizInitialState } from "./model";
import { FetchQuizDataReducer } from "./reducer";
import watcherSaga, { fetchQuizDataWorkerSaga } from "./saga";
import * as API from "../../../globals/fetch";
import { runSaga } from "redux-saga";

describe("The QuizPage components", () => {
  //   const initialState: IFetchQuizInitialState = {
  //     quizzes: [],
  //   };

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

  describe("actions", () => {
    it("should dispatch correctly", () => {
      store.dispatch(FetchQuizDataAction());
      store.dispatch(CreateQuizAction(actionPayload));
      store.dispatch(EditQuizAction(actionPayload));
      store.dispatch(DeleteQuizAction(actionPayload));

      const expectedActions = [
        FetchQuizDataAction(),
        CreateQuizAction(actionPayload),
        EditQuizAction(actionPayload),
        DeleteQuizAction(actionPayload),
      ];

      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  describe("reducer", () => {
    it("should process FetchQuizDataActionSuccess", () => {
      const expectedReducerState: IFetchQuizInitialState = {
        quizzes: [actionPayload],
      };
      expect(
        FetchQuizDataReducer(
          populatedInitialState,
          FetchQuizDataActionSuccess([actionPayload])
        )
      ).toEqual(expectedReducerState);
    });
  });
  describe("watcherSaga", () => {
    const saga = watcherSaga();
    it("should wait for the latest FETCH_QUIZ_DATA_ACTION action and call the workerSaga", () => {
      expect(saga.next().value).toEqual(
        takeLatest(
          QuizRequestTypes.FETCH_QUIZ_DATA_ACTION,
          fetchQuizDataWorkerSaga
        )
      );
    });
    it("should be done on the next iteration", () => {
      expect(saga.next().done).toBeTruthy();
    });
  });
  describe("workerSaga", () => {
    it("should call the API and dispatch a success action", async () => {
      const mockResponse = [actionPayload];
      const dispatched: FetchQuizRequestAction[] = [];

      const getNationalityData = sinon
        .stub(API, "Get")
        .callsFake(() => Promise.resolve(mockResponse));

      await runSaga(
        {
          dispatch: (action: FetchQuizRequestAction) => dispatched.push(action),
        },
        fetchQuizDataWorkerSaga
      );

      sinon.assert.calledOnce(getNationalityData);
      expect(dispatched).toEqual([FetchQuizDataActionSuccess(mockResponse)]);
    });

    it("should call the api and dispatch an error action", async () => {
      const error = "Get failed";
      const dispatched: FetchQuizRequestAction[] = [];

      const getNationalityData = sinon
        .stub(API, "Get")
        .callsFake(() => Promise.reject(error));

      await runSaga(
        {
          dispatch: (action: FetchQuizRequestAction) => dispatched.push(action),
        },
        fetchQuizDataWorkerSaga
      );

      sinon.assert.calledOnce(getNationalityData);
      expect(dispatched).toEqual([FetchQuizDataActionFailure(error)]);
    });
    afterEach(() => {
      sinon.restore();
    });
  });
});
