export enum QuizRequestTypes {
  FETCH_QUIZ_DATA_ACTION = "FETCH_QUIZ_DATA_ACTION",
  FETCH_QUIZ_DATA_ACTION_SUCCESS = "FETCH_QUIZ_DATA_ACTION_SUCCESS",
  FETCH_QUIZ_DATA_ACTION_FAILURE = "FETCH_QUIZ_DATA_ACTION_FAILURE",
  FETCH_QUIZ_DATA_REQUEST = "quiz/all",

  CREATE_QUIZ_ACTION = "CREATE_QUIZ_ACTION",
  CREATE_QUIZ_ACTION_SUCCESS = "CREATE_QUIZ_ACTION_SUCCESS",
  CREATE_QUIZ_ACTION_FAILURE = "CREATE_QUIZ_ACTION_FAILURE",
  CREATE_QUIZ_ACTION_REQUEST = "quiz/create",

  DELETE_QUIZ_ACTION = "DELETE_QUIZ_ACTION",
  DELETE_QUIZ_ACTION_SUCCESS = "DELETE_QUIZ_ACTION_SUCCESS",
  DELETE_QUIZ_ACTION_FAILURE = "DELETE_QUIZ_ACTION_FAILURE",
  DELETE_QUIZ_ACTION_REQUEST = "quiz/delete",

  EDIT_QUIZ_ACTION = "EDIT_QUIZ_ACTION",
  EDIT_QUIZ_ACTION_SUCCESS = "EDIT_QUIZ_ACTION_SUCCESS",
  EDIT_QUIZ_ACTION_FAILURE = "EDIT_QUIZ_ACTION_FAILURE",
  EDIT_QUIZ_ACTION_REQUEST = "quiz/update",
}
