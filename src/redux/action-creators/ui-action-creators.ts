import { SET_LOADER } from "../action-types/ui-action-types";

const setIsLoading = (isLoading: boolean) => ({
  type: SET_LOADER,
  isLoading,
});

export { setIsLoading };
