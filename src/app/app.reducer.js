import { SUCCESS_GET_USER_VIEWS, ERROR_GET_USER_VIEWS } from './app.action';
import { DEFAULT_STATE } from "./app.state";

export const appReducer = (state = DEFAULT_STATE, action = { type: {}, data: {} }) => {
  switch (action.type) {
    case SUCCESS_GET_USER_VIEWS:
      const userViews = action.data;
      return { ...state, userViews };
    case ERROR_GET_USER_VIEWS:
      const errorUserViews = action.data;
      return { ...state, cmsData: errorUserViews };
    default:
      return state;
  }
};