import { IActivation, IUser, IUserResponse } from "./../../types";
import {
  SIGN_IN,
  SIGN_UP,
  SIGN_UP_ACTIVATION,
  GET_USER,
  SET_USER,
} from "../action-types/user-action-types";
import { takeEvery } from "redux-saga/effects";
import { put } from "redux-saga/effects";

function* getToken() {
  const token = localStorage.getItem("access");
  const respVerify: Response = yield fetch(
    "https://studapi.teachmeskills.by/auth/jwt/verify/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ token }),
    }
  );
  if (respVerify.status === 200) {
    return token;
  } else {
    const refreshToken = localStorage.getItem("refresh");
    const respRefresh: Response = yield fetch(
      "https://studapi.teachmeskills.by/auth/jwt/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ refresh: refreshToken }),
      }
    );
    const data: { access: string } = yield respRefresh.json();
    const { access } = data;
    localStorage.setItem("access", access);
    return access;
  }
}
const signUp = (user: IUser) => ({
  type: SIGN_UP,
  user,
});

const signUpActivation = (activationData: IActivation) => ({
  type: SIGN_UP_ACTIVATION,
  activationData,
});

const signIn = (user: IUser) => ({
  type: SIGN_IN,
  user,
});

const getUser = () => ({
  type: GET_USER,
});

const setUser = (user: IUser) => ({
  type: SET_USER,
  user,
});

function* fetchSignUp(action: any) {
  const resp: Response = yield fetch(
    "https://studapi.teachmeskills.by/auth/users/",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.user),
    }
  );
}

function* fetchSignIn(action: any) {
  const resp: Response = yield fetch(
    "https://studapi.teachmeskills.by/auth/jwt/create/",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.user),
    }
  );
  if (resp.status === 200) {
    const tokens: IUserResponse = yield resp.json();
    localStorage.setItem("access", tokens.access);
    localStorage.setItem("refresh", tokens.refresh);
    yield put(getUser());
  }
}

function* fetchActivation(action: any) {
  const resp: Response = yield fetch(
    "https://studapi.teachmeskills.by/auth/users/activation/",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.activationData),
    }
  );
}

function* fetchGetUser() {
  const token: string = yield getToken();
  const resp: Response = yield fetch(
    "https://studapi.teachmeskills.by/auth/users/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const user: IUser = yield resp.json();
  yield put(setUser(user));
}

function* watcherUser() {
  yield takeEvery(SIGN_UP, fetchSignUp);
  yield takeEvery(SIGN_IN, fetchSignIn);
  yield takeEvery(SIGN_UP_ACTIVATION, fetchActivation);
  yield takeEvery(GET_USER, fetchGetUser);
}

export { signUp, watcherUser, signUpActivation, signIn, setUser };
