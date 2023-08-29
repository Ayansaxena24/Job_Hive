

export const jobLoadAction = (pageNumber, keyWord = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/jobs?pageNumber=${pageNumber}&keyWord=${keyWord}&cat=${cat}&location=${location}`);
    } catch (error) {
        
    }