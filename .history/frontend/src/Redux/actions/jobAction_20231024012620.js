export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`);
        dispatch({ 
            type: JOB_LOAD_SUCCESS, 
            payload: data 
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response?.data?.error || 'An error occurred'
        });
    }
}

// single job action
export const jobLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
    try {
        const { data } = await axios.get(`/api/job/${id}`);
        const jobTypeName = data.jobType?.jobTypeName || ''; // Ensure jobType is defined before accessing jobTypeName
        const { _id, title, description, salary, location, user, createdAt, updatedAt, available } = data;
        dispatch({ 
            type: JOB_LOAD_SINGLE_SUCCESS, 
            payload: {
                _id,
                title,
                description,
                salary,
                location,
                user,
                available,
                createdAt,
                updatedAt,
                jobTypeName
            } 
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_SINGLE_FAIL,
            payload: error.response?.data?.error || 'An error occurred'
        });
    }
}

// register job action
export const registerAjobAction = (job) => async (dispatch) => {
    dispatch({ type: REGISTER_JOB_REQUEST })

    try {
        const { data } = await axios.post("/api/job/create", job)
        dispatch({
            type: REGISTER_JOB_SUCCESS,
            payload: data
        })
        toast.success("Job created successfully");
    } catch (error) {
        dispatch({
            type: REGISTER_JOB_FAIL,
            payload: error.response?.data?.error || 'An error occurred'
        })
        toast.error(error.response?.data?.error || 'An error occurred');
    }
}
