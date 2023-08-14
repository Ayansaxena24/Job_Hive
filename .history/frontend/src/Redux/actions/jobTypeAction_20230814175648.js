import axios from 'axios';

export const jobTypeLoadAction = () => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/type/jobs`);
        dispatch({ 
            type: JOB_LOAD_SUCCESS, 
            payload: data 
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}