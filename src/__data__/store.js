import thunkMiddleware from 'redux-thunk'
import { createStore as createReduxStore, compose, applyMiddleware, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly'
import * as appReducers from './reducers'

const createReducer = (reducers = {}) => combineReducers({
    ...appReducers
})

export const createStore = () => {
    const reducer = createReducer()

    const composedEnhancer = compose(
        applyMiddleware(thunkMiddleware),
        devToolsEnhancer({
            name: 'TODO-CARDS',
        })
    )

    return createReduxStore(reducer, composedEnhancer)
}

export default createStore()
