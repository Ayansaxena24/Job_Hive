import { swap } from "formik";
import {
  JOB_LOAD_FAIL,
  JOB_LOAD_REQUEST,
  JOB_LOAD_RESET,
  JOB_LOAD_SINGLE_FAIL,
  JOB_LOAD_SINGLE_REQUEST,
  JOB_LOAD_SINGLE_RESET,
  JOB_LOAD_SINGLE_SUCCESS,
  JOB_LOAD_SUCCESS,
} from "../constants/jobConstants";

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
        success: action.payload.success,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
        setUniqueLocation: action.payload.setUniqueLocation,
        jobs: action.payload.jobs,
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


//single job 
export const loadJobSingleReducer = (
  state = { job: {} },
  action //initial state is empty array
) => {
  console.log(action, state);
  switch (action.type) {
    case JOB_LOAD_SINGLE_REQUEST: //if request is made, loading is true
      return { loading: true };
    case JOB_LOAD_SINGLE_SUCCESS: //if request is successful, loading is false and jobs are returned
      return {
        loading: false,
        success: action.payload.success,
        singleJob: action.payload.job,
      };

    case JOB_LOAD_SINGLE_FAIL: //if request is successful, loading is false and jobs are returned
      return {
        loading: false,
        error: action.payload,
      };

    case JOB_LOAD_SINGLE_RESET: //if request is successful, loading is false and jobs are returned
      return {};
    default:
      return state;
  }
};

//Registered Job
export const registerAjobReducer = (state = {}, action => {
  switch(action.type) {
    case REGISTER_JOB_REQUEST:
      return { loading : true }
    case REGISTER_JOB_SUCCESS:
      return { 
        loading : false,
      job : action.payload, 
    }
    case REGISTER_JOB_FAIL
  }
})