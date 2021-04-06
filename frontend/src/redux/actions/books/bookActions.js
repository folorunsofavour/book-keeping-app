import axios from 'axios';
import { BOOK_DETAIL_FAIL, BOOK_DETAIL_REQUEST, BOOK_DETAIL_SUCCESS, BOOK_UPDATE_FAIL, BOOK_UPDATE_REQUEST, BOOK_UPDATE_SUCCESS, CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, DELETE_BOOK_FAIL, DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, FETCH_BOOK_FAIL, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS } from "../actionTypes";

// Create Book Action
const createBookAction = (bookData) => {
    return async (dispatch, getState) => {

        const {token} = getState().userCreated;
        try{
            dispatch({
                type: CREATE_BOOK_REQUEST,
            });

            const config = {
                headers: {
                    authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };

            const {data} = await axios.post('/api/books/create', bookData, config);

            dispatch({
                type: CREATE_BOOK_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: CREATE_BOOK_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    }
};

// Fetch all Books Action
const fetchBooksAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_BOOK_REQUEST,
            });

            const config = {
                'Content-Type': 'application/json',
            };

            const {data} = await axios.get('/api/books', config);

            dispatch({
                type: FETCH_BOOK_SUCCESS,
                payload: data,
            });
        } 
        catch (error) {
            dispatch({
                type: FETCH_BOOK_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    }
};

// Get one Book Action
const getBookAction = (bookId) => {
    return async (dispatch, getState) => {
        const {token} = getState().userCreated;
        try {
            dispatch({
                type: BOOK_DETAIL_REQUEST,
            });

            const config = {
                headers: {
                    authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };

            const {data} = await axios.get(`/api/book/${bookId}`, config);

            dispatch({
                type: BOOK_DETAIL_SUCCESS,
                payload: data,
            });
        } 
        catch (error) {
            dispatch({
                type: BOOK_DETAIL_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    }
};

// Update Book Action
const updateBookAction = (bookData, bookId) =>{
    return async (dispatch, getState) => {
        const {token} = getState().userCreated;
        try {

            dispatch({
                type: BOOK_UPDATE_REQUEST
            });

            // Make actual call
            const config = {
                headers: {
                    authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };

            // Make request
            const {data} =  await axios.put(`/api/books/update/${bookId}`, bookData, config);

            dispatch({
                type: BOOK_UPDATE_SUCCESS,
                payload: data,
            });

        } 
        catch (error) {
            dispatch({
                type: BOOK_UPDATE_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    };
}

// Delete Book Action
const deleteBookAction = (bookId) =>{
    return async (dispatch, getState) => {
        const {token} = getState().userCreated;
        const {books} = getState().userBooks;
        ;
        try {

            dispatch({
                type: DELETE_BOOK_REQUEST
            });

            // Make actual call
            const config = {
                headers: {
                    authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            // Make request
            const {data} =  await axios.delete(`/api/books/delete/${bookId}`, config);

            dispatch({
                type: DELETE_BOOK_SUCCESS,
                payload: { books: books.filter(item => item._id !== bookId), success: data.message }
            });

        } 
        catch (error) {
            dispatch({
                type: DELETE_BOOK_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    };
}
export {createBookAction, fetchBooksAction, updateBookAction, getBookAction, deleteBookAction};