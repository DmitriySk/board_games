import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'
import rootSaga from './sagas';
import history from './history';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
];
const preloadedState = {};

const store = createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && process.env.NODE_ENV !== 'production' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f // eslint-disable-line
  )
);

sagaMiddleware.run(rootSaga);

export default store;