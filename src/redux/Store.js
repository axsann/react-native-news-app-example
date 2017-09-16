// @flow

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import logger from 'redux-logger'

import reducer from './Reducer'
import articlesSaga from './modules/Articles.saga'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
  // applyMiddleware(logger)
)

sagaMiddleware.run(articlesSaga)
