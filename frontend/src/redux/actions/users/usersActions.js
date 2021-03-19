import axios from 'axios';
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../actionTypes";

const registerUserAction = (name, email, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST
            });

            // Make actual call
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const {data} =  await axios.post('/api/users/register', {name, email, password}, config);

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data,
            });

            // Save the user into local storage
            localStorage.setItem('userAuthData', JSON.stringify(data))
        } 
        catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    };
};

// Login action
const loginUserAction = (loginData) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            });

            // Make actual call
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const {data} =  await axios.post('/api/users/login', loginData, config);

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            });

            // Save the user into local storage
            localStorage.setItem('userAuthData', JSON.stringify(data))
        } 
        catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    };
};

// Logout Action
const logoutUserAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_LOGOUT_REQUEST
            });

            // Remove User from local storage
            localStorage.removeItem('userAuthData');

            dispatch({
                type: USER_LOGOUT_SUCCESS,
            });

        } 
        catch (error) {
            dispatch({
                type: USER_LOGOUT_FAIL,
            });
        }
    };
};

// Profile Action
const getUserProfileAction = () => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().userCreated;
        try {

            dispatch({
                type: USER_PROFILE_REQUEST
            });

            // Make actual call
            const config = {
                headers: {
                    authorization: `Bearer ${userInfo.token}`,
                    'Content-Type': 'application/json',
                },
            };

            // Make request
            const {data} =  await axios.get('/api/users/profile', config);

            dispatch({
                type: USER_PROFILE_SUCCESS,
                payload: data,
            });

        } 
        catch (error) {
            dispatch({
                type: USER_PROFILE_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    };
};

// Update Action
const updateUserAction = (profileData) =>{
    return async (dispatch, getState) => {
        const {userInfo} = getState().userCreated;
        try {

            dispatch({
                type: USER_UPDATE_REQUEST
            });

            // Make actual call
            const config = {
                headers: {
                    authorization: `Bearer ${userInfo.token}`,
                    'Content-Type': 'application/json',
                },
            };

            // Make request
            const {data} =  await axios.put('/api/users/update', profileData, config);

            dispatch({
                type: USER_UPDATE_SUCCESS,
                payload: data,
            });

        } 
        catch (error) {
            dispatch({
                type: USER_UPDATE_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    };
}

export {registerUserAction,loginUserAction,logoutUserAction,getUserProfileAction,updateUserAction};