import { call, put, takeLatest } from "redux-saga/effects";
import { QuizRequestTypes } from "../../../globals";
import { Get } from "../../../globals/fetch";
import {
  FetchQuizDataActionFailure,
  FetchQuizDataActionSuccess,
} from "./action";

export function* fetchQuizDataWorkerSaga() {
  try {
    // @ts-ignore
    const response = yield call(Get, QuizRequestTypes.FETCH_QUIZ_DATA_REQUEST);
    yield put(FetchQuizDataActionSuccess(response));
  } catch (error) {
    yield put(FetchQuizDataActionFailure(error));
  }
}

export default function* watcherSaga(): any {
  yield takeLatest(
    QuizRequestTypes.FETCH_QUIZ_DATA_ACTION,
    fetchQuizDataWorkerSaga
  );
}
