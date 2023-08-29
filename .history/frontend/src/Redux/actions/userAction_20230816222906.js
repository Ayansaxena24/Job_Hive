import axios from 'axios';

export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGI_REQUEST });
    try {
        const { data } = await axios.post(`/api/signin`, user);
        dispatch({ 
            type: USER_SIGI_SUCCESS, 
            payload: data 
        });
    } catch (error) {
        dispatch({
            type: USER_SIGI_FAIL,
            payload: error.response.data.error
        });
    }
}