export const loadJobReducer = (states = {jobs:[]}, action) =>
{
    switch(action.type)
    {
        case JOB_LOAD_REQUEST: