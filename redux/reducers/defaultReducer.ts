import { initialState } from "../initial-state";
import * as ACTIONS from "../actionTypes";

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading: isLoading
      };
    }
    default:
      return state;
  }
}
