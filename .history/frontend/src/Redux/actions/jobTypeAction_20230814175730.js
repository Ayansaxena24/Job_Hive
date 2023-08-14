import axios from 'axios';

export const jobTypeLoadAction = () => async (dispatch) => {
    dispatch({ type: JOB_TYPE_LOAD_REQUES });
    try {
        const { data } = await axios.get(`/api/type/jobs`);
        dispatch({ 
            type: JOB_TYPE_LOAD_SUCCESS, 
            payload: data 
        });
    } catch (error) {
        dispatch({
            type: JOB_TYPE_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}