import { combineReducers } from "redux";
import { FetchQuizDataReducer } from "../features/quiz/redux/reducer";

export const rootReducer = combineReducers({ FetchQuizDataReducer });

export type RootState = ReturnType<typeof rootReducer>;
