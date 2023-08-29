import axios from 'axios';

export const userSignInAction = (user) => async (dispatch) => {
_REQUEST });
    try {
        const { data } = await axios.post(`/api/signin`, user);
        dispatch({ 
_SUCCESS, 
            payload: data 
        });
    } catch (error) {
        dispatch({
_FAIL,
            payload: error.response.data.error
        });
    }
}