import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBookReducer, fetchBooksReducer } from '../reducers/books/bookReducer';

const middlewares = [thunk];

const reducer = combineReducers({
    bookCreated: createBookReducer,
    booksFetched: fetchBooksReducer,
});

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middlewares))
);

export {store};