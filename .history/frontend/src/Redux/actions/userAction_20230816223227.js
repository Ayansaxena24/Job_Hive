import axios from 'axios';
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../constants/userConstant';
import { toast } from 'react-toastify';

export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        const { data } = await axios.post(`/api/signin`, user);
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
        toast.error('Login Successful!');
    }
}