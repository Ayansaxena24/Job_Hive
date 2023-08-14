export const loadJobReducer = (states = {jobs:[]}, action) => //initial state is empty array 
{
    switch(action.type)
    {
        case JOB_LOAD_REQUEST:
            return {loading:true}
        case JOB_LOAD_SUCCESS:
            return{
            loading : true,
            jobs: action.payload.jobs
    } 
    default:
        return state;
}
}