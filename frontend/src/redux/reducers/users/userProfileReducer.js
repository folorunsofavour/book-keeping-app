import { USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, DELETE_BOOK_SUCCESS, DELETE_BOOK_REQUEST, DELETE_BOOK_FAIL } from "../../actions/actionTypes";

const userProfileReducer = (state =  {}, action) => {
    switch(action.type) {
        case USER_PROFILE_REQUEST:
            return {
                loading: true,
            };
        case USER_PROFILE_SUCCESS:
            return {
                userProfileData: action.payload.data
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
        default:
            return state;
    }
};

const userUpdateReducer = (state =  {}, action) => {
    switch(action.type) {
        case USER_UPDATE_REQUEST:
            return {
                loading: true,
            };
        case USER_UPDATE_SUCCESS:
            return {
                userUpdatedInfo: action.payload.data,
                message: {
                    type: 'success',
                    title: 'Success',
                    content: action.payload.message
                },
            };
        case USER_UPDATE_FAIL:
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


export {userProfileReducer, userUpdateReducer};