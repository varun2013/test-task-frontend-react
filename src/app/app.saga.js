import { put, takeLatest } from 'redux-saga/effects';
import { getUserViewsResponse, GET_USER_VIEWS, SUCCESS_GET_USER_VIEWS, ERROR_GET_USER_VIEWS } from './app.action';
import { getUserViewsApi } from '../api'
import _ from 'lodash'

function* getUserViewsRequest(getFilters) {
    let getData = yield getUserViewsApi(getFilters);
    if (getData.success && _.has(getData, 'data.data')) {
        yield put(getUserViewsResponse(SUCCESS_GET_USER_VIEWS, getData.data));
    } else {
        yield put(getUserViewsResponse(ERROR_GET_USER_VIEWS, getData.data));
    }
}

export function* getUserViewsWatcher() {
    yield takeLatest(GET_USER_VIEWS, getUserViewsRequest);
}