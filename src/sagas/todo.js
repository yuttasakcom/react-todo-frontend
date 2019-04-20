import { put, takeEvery, call } from "redux-saga/effects";
import { TODO } from "../constants/actionTypes";
import axios from "axios";

function* fetchTodos() {
  const { data: todos } = yield call([axios, axios.get], "/api/todos");
  yield put({ type: TODO.REDUCER_SET_TODOS, payload: todos });
}

export function* watchTodo() {
  yield takeEvery(TODO.SAGA_FETCH_TODOS, fetchTodos);
}
