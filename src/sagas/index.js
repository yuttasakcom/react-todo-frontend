import { all, fork } from "redux-saga/effects";

import { watchTodo } from "./todo";

export default function* root() {
  yield all([fork(watchTodo)]);
}
