import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const courtsReducer = () => {
    return {
        courts: []
    }
}

const reducer = combineReducers({
    courts: courtsReducer
})

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(courtsReducer, composer(applyMiddleware(thunk)));

export default store;
