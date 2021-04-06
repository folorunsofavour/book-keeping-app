import { BOOK_DETAIL_FAIL, BOOK_DETAIL_REQUEST, BOOK_DETAIL_SUCCESS, BOOK_UPDATE_FAIL, BOOK_UPDATE_REQUEST, BOOK_UPDATE_SUCCESS, CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, DELETE_BOOK_FAIL, DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, FETCH_BOOK_FAIL, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS,  USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS } from "../../actions/actionTypes";

// Create Book Reducer
const createBookReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_BOOK_REQUEST:
            return {
                loading: true,
            };
        case CREATE_BOOK_SUCCESS:
            return {
                book: action.payload.data,
                message: {
                    type: 'success',
                    title: 'Success',
                    content: action.payload.message
                },
            };
        case CREATE_BOOK_FAIL:
            return {
                loading: false,
                message: {
                    type: 'fail',
                    title: 'Error',
                    content: action.payload
                },
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
                books: action.payload.data,
                message: {
                    type: 'success',
                    title: 'Success',
                    content: action.payload.message
                },
            };
        case FETCH_BOOK_FAIL:
            return {
                loading: false,
                message: {
                    type: 'fail',
                    title: 'Error',
                    content: action.payload
                },
            };
        default:
            return state;
    }
};

// Get all books per user
const userBooksReducer = (state =  [], action) => {
    switch(action.type) {
        case USER_PROFILE_REQUEST:
            return {
                loading: true,
            };
        case USER_PROFILE_SUCCESS:
            return {
                books: action.payload.data.books
            };
        case USER_PROFILE_FAIL:
            return {
                loading: false,
                message: {
                    type: 'fail',
                    title: 'Error',
                    content: action.payload
                },
            };
        case DELETE_BOOK_SUCCESS:
            return {
                message: {
                    type: 'success',
                    title: 'Success',
                    content: action.payload.success
                },
                books: action.payload.books
            };
        default:
            return state;
    }
};


// Get Book Reducer
const getBookReducer = (state = {}, action) => {
    switch(action.type) {
        case BOOK_DETAIL_REQUEST:
            return {
                loading: true,
            };
        case BOOK_DETAIL_SUCCESS:
            return {
                getBook: action.payload.data,
            };
        case BOOK_DETAIL_FAIL:
            return {
                loading: false,
                message: {
                    type: 'fail',
                    title: 'Error',
                    content: action.payload
                },
            };
        default:
            return state;
    }
};

// Update Book Reducer
const updateBookReducer = (state = {}, action) => {
    switch(action.type) {
        case BOOK_UPDATE_REQUEST:
            return {
                loading: true,
            };
        case BOOK_UPDATE_SUCCESS:
            return {
                updatedBook: action.payload.data,
                message: {
                    type: 'success',
                    title: 'Success',
                    content: action.payload.message
                },
            };
        case BOOK_UPDATE_FAIL:
            return {
                loading: false,
                message: {
                    type: 'fail',
                    title: 'Error',
                    content: action.payload
                },
            };
        default:
            return state;
    }
};

// Delete Book Reducer
const deleteBookReducer = (state = {}, action) => {
    switch(action.type) {
        case DELETE_BOOK_REQUEST:
            return {
                loading: true,
            };
        case DELETE_BOOK_FAIL:
            return {
                loading: false,
                deletemessage: {
                    type: 'fail',
                    title: 'Error',
                    content: action.payload
                },
            };
        default:
            return state;
    }
};

export {createBookReducer, fetchBooksReducer, userBooksReducer, updateBookReducer, getBookReducer, deleteBookReducer};