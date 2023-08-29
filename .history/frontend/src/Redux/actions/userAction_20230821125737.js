import axios from 'axios';
import { USER_APPLY_JOB_REQUEST, USER_APPLY_JOB_SUCCESS, USER_LOAD_FAIL, USER_LOAD_REQUEST, USER_LOAD_SUCCESS, USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../constants/userConstant';
import { toast } from 'react-toastify';

export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        const { data } = await axios.post(`/api/signin`, user);
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch({ 
            type: USER_SIGNIN_SUCCESS, 
            payload: data 
        });
        toast.success('Login Successful!');
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

//logout action
export const userLogOutAction = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST });
    try {
        const { data } = await axios.get("/api/logout");
        localStorage.removeItem('userInfo');
        dispatch({ 
            type: USER_LOGOUT_SUCCESS, 
            payload: data 
        });
        toast.success('Logged Out Successful!');
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}


//user profile action
export const userProfileAction = () => async (dispatch) => {
    dispatch({ type: USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get("/api/me");
        dispatch({ 
            type: USER_LOAD_SUCCESS, 
            payload: data 
        });
    } catch (error) {
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

//user apply job action
export const userApplyJobAction = (job) => async (dispatch) => {
    dispatch({ type : USER_APPLY_JOB_REQUEST });
    try{
        const { data } = await axios.post("/api/user/history", job);

        dispatch({
            type : USER_APPLY_JOB_SUCCESS,
            payload : data
        });
        toast.success("Applied Successfull for this Job!");
    } catch (error)
    {
        dispatch({
            type : USER_APPLY_JOB_FAIl,
            payload : error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}