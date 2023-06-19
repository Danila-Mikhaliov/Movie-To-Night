import { IUserState, IUser } from "./../../types";
import { SET_USER } from "../action-types/user-action-types";

const initialState = {
  user: {} as IUser,
};
const getInitialState = () => {
  const localState = localStorage.getItem("localState");
  if (localState) {
    const parsed = JSON.parse(localState);
    const { user } = parsed;
    return user;
  }
  return initialState;
};

const userReducer = (state: IUserState = getInitialState(), action: any) => {
  switch (action.type) {
    case SET_USER: {
      const { user } = action;
      return { ...state, user };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
