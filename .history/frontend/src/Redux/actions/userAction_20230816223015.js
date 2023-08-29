import axios from 'axios';
import { USER_SIGNIN_REQUEST } from '../constants/userConstant';

export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        const { data } = await axios.post(`/api/signin`, user);
        dispatch({ 
            type: USER_SIGNIN_SUCCESS, 
            payload: data 
        });
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
    }
}