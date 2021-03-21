import { createStore, applyMiddleware, compose as defaultCompose, combineReducers } from 'redux'
import reducers from './reducers'
import rejectedPromiseMiddleware from './middlewares/rejectedPromise'
import promiseMiddleware from 'redux-promise-middleware'
import eventsMiddleware from './middlewares/events'
import favouritesMiddleware from './middlewares/favourites'

export default function (preloadedState) {
  let compose = defaultCompose
  /* global __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:false */
  if (typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    // if you install the Redux Devtools extension (see https://github.com/zalmoxisus/redux-devtools-extension)
    // then this will connect to the dev tools and allow you to inspect Redux state
    compose = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  const rootReducer = combineReducers(reducers)
  const enhancers = compose(applyMiddleware(
    rejectedPromiseMiddleware,
    promiseMiddleware,
    eventsMiddleware,
    favouritesMiddleware
  ))

  const store = createStore(rootReducer, preloadedState, enhancers)

  if (module.hot && process.env.NODE_ENV === 'development') {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      const rootReducer = combineReducers(reducers)
      store.replaceReducer(rootReducer)
    })
  }

  return store
}
