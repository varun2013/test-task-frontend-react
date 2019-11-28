const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const URL = (uri) => `${BASE_URL}${uri}`;

/***** Auth routes*********/
export const GET_USER_VIEWS = URL('/users/getUserViews');