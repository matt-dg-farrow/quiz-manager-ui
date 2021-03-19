import { all, fork } from "redux-saga/effects";
import quizSaga from "../features/quiz/redux/saga";

export default function* rootSaga() {
  yield all([fork(quizSaga)]);
}
