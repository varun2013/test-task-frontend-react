import { GET_USER_VIEWS } from './route';
import { request } from './axios.request'

export async function getUserViewsApi(userViewData) {
    let data = userViewData.data;
    return request({ url: GET_USER_VIEWS, method: 'post', data })
}
