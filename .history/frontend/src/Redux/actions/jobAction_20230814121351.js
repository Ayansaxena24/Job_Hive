import axios from 'axios';
import { JOB_LOAD_REQUEST } from '../constraints/jobConstraints';

export const jobLoadAction = (pageNumber, keyWord = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/jobs?pageNumber=${pageNumber}&keyWord=${keyWord}&cat=${cat}&location=${location}`);
        dispatch({ 
            type: JOB_LOAD_SUCCESS, 
            payload: data 
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.dara.error
        })
    }