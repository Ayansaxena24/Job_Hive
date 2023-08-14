

export const loadJobReducer = (
    state = { jobs: [] },
    action //initial state is empty array
  ) => {
    switch (action.type) {
      case JOB_LOAD_REQUEST: //if request is made, loading is true
        return { loading: true };
      case JOB_LOAD_SUCCESS: //if request is successful, loading is false and jobs are returned
        return {
          loading: false,
          jobType: action.payload
        };
  
      case JOB_LOAD_FAIL: //if request is successful, loading is false and jobs are returned
        return {
          loading: false,
          error: action.payload,
        };
  
      case JOB_LOAD_RESET: //if request is successful, loading is false and jobs are returned
        return {};
      default:
        return state;
    }
  };