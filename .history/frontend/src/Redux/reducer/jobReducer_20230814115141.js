export const loadJobReducer = (states = {jobs:[]}, action) =>
{
    switch(action.type)
    {
        case JOB_LOAD_REQUEST:
            return {loading:true}
        case JOB_LOAD_SUCCESS:
            loading : true