import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import Root from './components/Root'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    throw err
  }
}

const store = createStore(
  rootReducer,
  // applyMiddleware() tells createStore() how to handle middleware
  applyMiddleware(logger, crashReporter)
)

render(<Root store={store} />, document.getElementById('root'))