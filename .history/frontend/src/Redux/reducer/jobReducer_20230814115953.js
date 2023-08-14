export const loadJobReducer = (states = {jobs:[]}, action) => //initial state is empty array 
{
    switch(action.type) 
    {
        case JOB_LOAD_REQUEST: //if request is made, loading is true
            return {loading:true}
        case JOB_LOAD_SUCCESS: //if request is successful, loading is false and jobs are returned
            return{
            loading : false,
            success: action.payload.success,
            page: action.payload.page,
            pages: action.payload.pages,
            count: action.payload.count,
            SetUniqueLocation: action.payload.SetUniqueLocation,
            jobs: action.payload.jobs
            }
             
        case JOB_LOAD_FAIL: //if request is successful, loading is false and jobs are returned
            return{
            loading : false,
            success: action.payload.success,
            page: action.payload.page,
            pages: action.payload.pages,
            count: action.payload.count,
            SetUniqueLocation: action.payload.SetUniqueLocation,
            jobs: action.payload.jobs
            } 
    default:
        return state;
}
}