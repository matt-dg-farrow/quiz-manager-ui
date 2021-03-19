import { createAction } from "@reduxjs/toolkit";
import { QuizRequestTypes } from "../../../globals";
import { Quiz } from "../../../globals/types";

export const FetchQuizDataAction = createAction(
  QuizRequestTypes.FETCH_QUIZ_DATA_ACTION
);

export const FetchQuizDataActionSuccess = createAction<Quiz[]>(
  QuizRequestTypes.FETCH_QUIZ_DATA_ACTION_SUCCESS
);

export const FetchQuizDataActionFailure = createAction<any>(
  QuizRequestTypes.FETCH_QUIZ_DATA_ACTION_FAILURE
);

export const CreateQuizAction = createAction<Quiz>(
  QuizRequestTypes.CREATE_QUIZ_ACTION
);

export const CreateQuizActionSuccess = createAction(
  //does this need a payload?
  QuizRequestTypes.CREATE_QUIZ_ACTION_SUCCESS
);

export const CreateQuizActionFailure = createAction<any>(
  //does this need a payload?
  QuizRequestTypes.CREATE_QUIZ_ACTION_FAILURE
);

export const DeleteQuizAction = createAction<Quiz>(
  QuizRequestTypes.DELETE_QUIZ_ACTION
);

export const DeleteQuizActionSuccess = createAction(
  //does this need a payload?
  QuizRequestTypes.DELETE_QUIZ_ACTION_SUCCESS
);

export const DeleteQuizActionFailure = createAction<any>(
  //does this need a payload?
  QuizRequestTypes.DELETE_QUIZ_ACTION_FAILURE
);

export const EditQuizAction = createAction<Quiz>(
  QuizRequestTypes.EDIT_QUIZ_ACTION
);

export const EditQuizActionSuccess = createAction(
  //does this need a payload?
  QuizRequestTypes.EDIT_QUIZ_ACTION_SUCCESS
);

export const EditQuizActionFailure = createAction<any>(
  //does this need a payload?
  QuizRequestTypes.EDIT_QUIZ_ACTION_FAILURE
);
