import FetchProducts from "../requests/getProducts";
import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../action-types";
function* HandleProducts(): any {
  try {
    const user = yield call(FetchProducts);
    yield put({
      type: types.PRODUCT_SUCCESS,
      payload: user,
    });
  } catch (error) {
    yield put({
      type: types.PRODUCT_FAIL,
      data: error,
    });
  }
}

export function* WatcherProducts() {
  yield takeLatest(types.PRODUCT_REQUEST, HandleProducts);
}
