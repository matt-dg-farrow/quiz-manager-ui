import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import sagas from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
