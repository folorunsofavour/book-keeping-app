import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../../actions/actionTypes";

// this is for both user register and login
const registerUserReducer = (state =  {}, action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true,
            };
        case USER_REGISTER_SUCCESS:
            return {
                userInfo: action.payload,
            };
        case USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
            };
        case USER_LOGIN_SUCCESS:
            return {
                // this userInfo will override the one up
                userInfo: action.payload,
            };
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export {registerUserReducer};