import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas/rootSaga";
import { composeWithDevTools } from "@redux-devtools/extension";
// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
// run the saga
sagaMiddleware.run(rootSaga);
