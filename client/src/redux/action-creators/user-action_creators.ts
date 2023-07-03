import { put, takeEvery } from "redux-saga/effects";
import { IAuthInfo, IAuthResponse, IMovieInfo, IUserInfo } from "../../types";
import {
  CHECK_AUTH,
  LOG_OUT,
  SET_AUTH,
  SET_USER,
  SIGN_IN,
  SIGN_UP,
  TOGGLE_IS_FAVORITE,
} from "../action-types/user-action_types";
import { AUTH_API_URL } from "../../constants";
import { toggleIsLoading, toggleModal } from "./ui-action_creators";

export const toggleIsFavorite = (movie: IMovieInfo) => ({
  type: TOGGLE_IS_FAVORITE,
  movie,
});

export const setUser = (user: IUserInfo) => ({
  type: SET_USER,
  user,
});

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const signIn = (user: IAuthInfo) => ({
  type: SIGN_IN,
  user,
});

export const setAuth = (isAuth: boolean) => ({
  type: SET_AUTH,
  isAuth,
});

export const signUp = (user: IAuthInfo) => ({
  type: SIGN_UP,
  user,
});

export const logOut = () => ({
  type: LOG_OUT,
});

function* fetchSignIn(action: any) {
  yield put(toggleIsLoading(true));
  const { user } = action;
  const resp: Response = yield fetch(`${AUTH_API_URL}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (resp.ok) {
    const res: IAuthResponse = yield resp.json();
    if (res.user.isActivated) {
      yield put(setUser(res.user));
      yield put(setAuth(true));
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      window.location.pathname = "/";
    } else {
      yield put(
        toggleModal({
          showModal: true,
          text: "Подтвердите адрес электронной почты",
        })
      );
    }
  } else {
    const res: { message: string; errors: [] } = yield resp.json();
    yield put(toggleModal({ showModal: true, text: `${res.message}` }));
  }
  yield put(toggleIsLoading(false));
}

function* fetchSignUp(action: any) {
  yield put(toggleIsLoading(true));
  const { user } = action;
  const resp: Response = yield fetch(`${AUTH_API_URL}/registration`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (resp.ok) {
    const res: IAuthResponse = yield resp.json();
    yield put(setUser(res.user));
    window.location.pathname = "/mail-confirm";
  } else {
    const res: { message: string; errors: [] } = yield resp.json();
    yield put(toggleModal({ showModal: true, text: `${res.message}` }));
  }
  yield put(toggleIsLoading(false));
}

function* fetchLogOut() {
  const resp: Response = yield fetch(`${AUTH_API_URL}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (resp.ok) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    yield put(setAuth(false));
    yield put(setUser({} as IUserInfo));
    window.location.pathname = "/sign-in";
  }
}

function* fetchCheckAuth() {
  const token: string = yield localStorage.getItem("refreshToken");
  const resp: Response = yield fetch(`${AUTH_API_URL}/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken: token }),
  });
  if (resp.ok) {
    const res: IAuthResponse = yield resp.json();
    yield put(setUser(res.user));
    yield put(setAuth(true));
    localStorage.setItem("accessToken", res.accessToken);
  } else {
    yield put(setUser({} as IUserInfo));
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    yield put(setAuth(false));
    window.location.pathname = "/sign-in";
  }
}

export function* watcherUser() {
  yield takeEvery(SIGN_IN, fetchSignIn);
  yield takeEvery(SIGN_UP, fetchSignUp);
  yield takeEvery(LOG_OUT, fetchLogOut);
  yield takeEvery(CHECK_AUTH, fetchCheckAuth);
}
