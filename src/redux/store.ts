import { createStore, combineReducers, applyMiddleware } from "redux";
import { watcherMovie } from "./action-creators/movie-action-creators";
import { watcherUser } from "./action-creators/user-action-creators";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import movieReducer from "./reducers/movie-reducer";
import userReducer from "./reducers/user-reducer";
import uiReducer from "./reducers/ui-reducer";

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([watcherMovie(), watcherUser()]);
}

const store = createStore(
  combineReducers({
    movie: movieReducer,
    user: userReducer,
    ui: uiReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  const currentValue = JSON.stringify(store.getState());
  localStorage.setItem("localState", currentValue);
});

export default store;
