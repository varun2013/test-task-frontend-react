
// Get view data
export const GET_USER_VIEWS = 'GET_USER_VIEWS';
export const getUserViews = (data) => ({  type: GET_USER_VIEWS,  data});
export const SUCCESS_GET_USER_VIEWS = 'SUCCESS_GET_USER_VIEWS';
export const ERROR_GET_USER_VIEWS = 'ERROR_GET_USER_VIEWS';
export const getUserViewsResponse = (type, data) => ({  type,  data});
