import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import courtsReducer from './reducers/courtsReducer'

const reducer = combineReducers({
    courts: courtsReducer,
})

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composer(applyMiddleware(thunk)));

export default store;
