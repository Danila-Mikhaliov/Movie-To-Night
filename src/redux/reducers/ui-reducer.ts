import { IUIState } from "../../types";
import { SET_LOADER } from "../action-types/ui-action-types";

const initialState = {
  isLoading: true,
};
const uiReducer = (state: IUIState = initialState, action: any) => {
  switch (action.type) {
    case SET_LOADER: {
      const { isLoading } = action;
      return {
        ...state,
        isLoading,
      };
    }

    default: {
      return state;
    }
  }
};

export default uiReducer;
