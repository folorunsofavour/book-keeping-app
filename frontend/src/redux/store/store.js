import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBookReducer, fetchBooksReducer } from '../reducers/books/bookReducer';
import { registerUserReducer } from '../reducers/users/userAuthReducer';
import { userProfileReducer, userUpdateReducer } from '../reducers/users/userProfileReducer';

const middlewares = [thunk];

const reducer = combineReducers({
    bookCreated: createBookReducer,
    booksFetched: fetchBooksReducer,
    userCreated: registerUserReducer,//consist of both login and register
    userProfile: userProfileReducer,
    userUpdate: userUpdateReducer,
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