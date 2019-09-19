import { applyMiddleware, createStore, compose } from 'redux'
import reduxLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '@/sagas'
import reducer from '@/reducer'

let store = null

const sagaMiddleware = createSagaMiddleware()

const createDevelopmentStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware, reduxLogger)))
}

const createProductionStore = () => {
  return createStore(reducer, applyMiddleware(sagaMiddleware))
}

export const getStore = () => {
  if (!store) {
    store =
      process.env.NODE_ENV === 'development' ? createDevelopmentStore() : createProductionStore()

    sagaMiddleware.run(rootSaga)
  }

  return store
}
