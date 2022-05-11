import { all } from "redux-saga/effects";
import { WatcherProducts } from "./handlers/index";
export default function* rootSaga() {
  yield all([WatcherProducts()]);
}
