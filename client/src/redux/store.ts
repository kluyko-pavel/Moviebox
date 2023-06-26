import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import moviesReducer from "./reducers/movies-reducer";
import { watcherMovie } from "./action-creators/movies-action_creators";
import uiReducer from "./reducers/ui-reducer";
import userReducer from "./reducers/user-reducer";
import { watcherUser } from "./action-creators/user-action_creators";

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([watcherMovie(), watcherUser()]);
}

const store = createStore(
  combineReducers({
    movies: moviesReducer,
    ui: uiReducer,
    user: userReducer,
  }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const handleChange = () => {
  localStorage.setItem("localState", JSON.stringify(store.getState()));
};

store.subscribe(() => handleChange());

export default store;
