import { Quiz } from "../../../../globals/types";
import {
  FetchQuizDataAction,
  FetchQuizDataActionFailure,
  FetchQuizDataActionSuccess,
} from "../action";

export interface IFetchQuizInitialState {
  quizzes: Quiz[];
}

export interface ICreateQuizPayload {
  quiz: Quiz;
}

export interface ICreateQuizInitialState {
  payload: ICreateQuizPayload;
}

export interface IDeleteQuizPayload {
  quiz: Quiz;
}

export interface IDeleteQuizInitialState {
  payload: IDeleteQuizPayload;
}

export type FetchQuizRequestAction =
  | typeof FetchQuizDataAction
  | typeof FetchQuizDataActionSuccess
  | typeof FetchQuizDataActionFailure;
