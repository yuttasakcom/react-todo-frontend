import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { todoReducer } from "./reducers/todo";
import rootSaga from "./sagas";

const reducers = combineReducers({
  todos: todoReducer,
});

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
