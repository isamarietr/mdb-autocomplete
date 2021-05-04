import * as ACTIONS from "./actionTypes";

export const setLoading = (isLoading: boolean) => ({
  type: ACTIONS.SET_LOADING,
  payload: {
    isLoading
  }
});
