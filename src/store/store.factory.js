import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './root.reducer'
import { rootSaga } from './root.saga'
import logger from 'redux-logger';

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// Begin our Index Saga
sagaMiddleware.run(rootSaga);