import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducer from './reducer'

export default function configureStore(initialState) {
    return createStore(reducer, initialState, applyMiddleware(logger))
}
