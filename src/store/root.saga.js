import { all } from 'redux-saga/effects';
import { getUserViewsWatcher } from '../app/app.saga'

export function* rootSaga() {
  yield all([
    getUserViewsWatcher()
  ])
}