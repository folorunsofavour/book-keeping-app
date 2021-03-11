import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, FETCH_BOOK_FAIL, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS } from "../../actions/actionTypes";

// Create Book Reducer
const createBookReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_BOOK_REQUEST:
            return {
                loading: true,
            };
        case CREATE_BOOK_SUCCESS:
            return {
                book: action.payload,
            };
        case CREATE_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

// Fetch Book Reducer
const fetchBooksReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_BOOK_REQUEST:
            return {
                loading: true,
            };
        case FETCH_BOOK_SUCCESS:
            return {
                books: action.payload,
            };
        case FETCH_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export {createBookReducer, fetchBooksReducer};