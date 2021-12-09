import { createStore,combineReducers,applyMiddleware } from "redux"
import actionReducer from './ActionReducers'
const rootReducer=combineReducers({
    emplyeeReducer:actionReducer
})

const store = createStore(rootReducer
, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store