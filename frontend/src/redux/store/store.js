import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBookReducer, fetchBooksReducer } from '../reducers/books/bookReducer';
import { registerUserReducer } from '../reducers/users/userAuthReducer';

const middlewares = [thunk];

const reducer = combineReducers({
    bookCreated: createBookReducer,
    booksFetched: fetchBooksReducer,
    userCreated: registerUserReducer,
});

// Get user from localstorage and save it into our store
const userAuthFromStorage = localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData')) : null;

const initialState = {
    userCreated: { userInfo: userAuthFromStorage },
}

const store = createStore(
    reducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export {store};