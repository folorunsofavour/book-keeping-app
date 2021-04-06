import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../../actions/actionTypes";

// this is for both user register and login
const registerUserReducer = (state =  {}, action) => {
    const userAuthFromStorage = localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData')) : null;

    switch(action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true,
            };
        case USER_REGISTER_SUCCESS:
            return {
                token: action.payload.data.token,
                userInfo: action.payload.data,
            };
        case USER_REGISTER_FAIL:
            return {
                loading: false,
                message: {
                    type: 'fail',
                    title: 'Error',
                    content: action.payload
                },
            };
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
            };
        case USER_LOGIN_SUCCESS:
            return {
                // this userInfo will override the one up
                token: action.payload.data.token,
                userInfo: action.payload.data,
            };
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                message: {
                    type: 'fail',
                    title: 'Error',
                    content: action.payload
                },
            };
        case USER_LOGOUT_REQUEST:
            return {
                loading: true,
            };
        case USER_LOGOUT_SUCCESS:
            return {};
        case USER_LOGOUT_FAIL:
            return {
                loading: false,
            };
        default:
            return state;
    }
};

export {registerUserReducer};