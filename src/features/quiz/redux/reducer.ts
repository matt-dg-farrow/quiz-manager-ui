import { createSlice } from "@reduxjs/toolkit";
import { Quiz } from "../../../globals/types";
import {
  CreateQuizAction,
  FetchQuizDataAction,
  FetchQuizDataActionSuccess,
} from "./action";
import { ICreateQuizPayload, IFetchQuizInitialState } from "./model";

const fetchInitialState: IFetchQuizInitialState = {
  quizzes: [],
};

const fetchQuizDataSlice = createSlice({
  name: "quiz",
  initialState: fetchInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchQuizDataActionSuccess, (state, action) => {
      state.quizzes = action.payload;
    });
  },
});

export const FetchQuizDataReducer = fetchQuizDataSlice.reducer;
