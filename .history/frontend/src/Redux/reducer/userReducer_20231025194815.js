import { ALL_USER_LOAD_FAIL, ALL_USER_LOAD_REQUEST, ALL_USER_LOAD_RESET, ALL_USER_LOAD_SUCCESS } from "../constants/jobConstants"
import { CREATOR_JOB_FAIL, CREATOR_JOB_REQUEST, CREATOR_JOB_RESET, CREATOR_JOB_SUCCESS, GET_APPLICANT_FAIL, GET_APPLICANT_REQUEST, GET_APPLICANT_RESET, GET_APPLICANT_SUCCESS, USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_RESET, USER_DELETE_SUCCESS, USER_LOAD_FAIL, USER_LOAD_REQUEST, USER_LOAD_RESET, USER_LOAD_SUCCESS, USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_RESET, USER_LOGOUT_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_RESET, USER_SIGNIN_SUCCESS, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_RESET, USER_SIGNUP_SUCCESS } from "../constants/userConstant"


export const userReducerSignIn = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true, userInfo: null, isAuthenticated: false }
            case USER_SIGNIN_SUCCESS:        
                return {
                    loading : false,
                    userInfo : action.payload,
                    isAuthenticated : true
                }
            case USER_SIGNIN_FAIL:
                return {loading : false, userinfo : null, isAuthenticated : false, error : action.payload}
            case USER_SIGNIN_RESET:
                return {}
            default : 
                return state;            
    }
}


export const userReducerLogout = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGOUT_REQUEST:
            return { loading: true }
            case USER_LOGOUT_SUCCESS:        
                return {
                    loading : false,
                    userInfo : action.payload,
                }
            case USER_LOGOUT_FAIL:
                return {loading : false, error : action.payload}
            case USER_LOGOUT_RESET:
                return {}
            default : 
                return state;            
    }
}

// sign up reducer
export const userReducerSignUp = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true }
        case USER_SIGNUP_SUCCESS:
            return {
                loading: false,
                userSignUp: action.payload,
            }
        case USER_SIGNUP_FAIL:
            return { loading: false, error: action.payload }
        case USER_SIGNUP_RESET:
            return {}
        default:
            return state;
    }
}

//user profile
export const userReducerProfile = (state = {user : null}, action) => {
    switch (action.type) {
        case USER_LOAD_REQUEST:
            return { loading: true, user: null }
            case USER_LOAD_SUCCESS:        
                return {
                    loading : false,
                    userInfo : action.payload.user,
                }
            case USER_LOAD_FAIL:
                return {loading : false, user:null, error : action.payload}
            case USER_LOAD_RESET:
                return {}
            default : 
                return state;            
    }
}


//user apply job reducer
export const userApplyJobReducer = (state = {user : null}, action) => {
    switch (action.type) {
        case USER_LOAD_REQUEST:
            return { loading: true, user: null }
            case USER_LOAD_SUCCESS:        
                return {
                    loading : false,
                    userInfo : action.payload.user,
                }
            case USER_LOAD_FAIL:
                return {loading : false, user:null, error : action.payload}
            case USER_LOAD_RESET:
                return {}
            default : 
                return state;            
    }
}


//all users reducer
export const allUserReducer = (state = {users : []}, action) => {
    switch (action.type) {
        case ALL_USER_LOAD_REQUEST:
            return { loading: true, users: [] }
            case ALL_USER_LOAD_SUCCESS:        
                return {
                    loading : false,
                    users : action.payload.users,
                }
            case ALL_USER_LOAD_FAIL:
                return {loading : false, users:[], error : action.payload}
            case ALL_USER_LOAD_RESET:
                return {}
            default : 
                return state;            
    }
}


//creator job reducer
export const creatorJobReducer = (state = {users : []}, action) => {
    switch (action.type) {
        case CREATOR_JOB_REQUEST:
            return { loading: true, users: [] }
            case CREATOR_JOB_SUCCESS:        
                return {
                    loading : false,
                    users : action.payload.users,
                }
            case CREATOR_JOB_FAIL:
                return {loading : false, users:[], error : action.payload}
            case CREATOR_JOB_RESET:
                return {}
            default : 
                return state;            
    }
}

//delete user reducer
export const deleteUserReducer = (state = { /* initial state */ }, action) => {
    switch (action.type) {
      // ... (other cases)
  
      case USER_DELETE_REQUEST:
        return { ...state, loadingDelete: true };
  
      case USER_DELETE_SUCCESS:
        return {
          ...state,
          loadingDelete: false,
          successDelete: true,
          deletedUserId: action.payload,
        };
  
      case USER_DELETE_FAIL:
        return {
          ...state,
          loadingDelete: false,
          errorDelete: action.payload,
        };
  
      case USER_DELETE_RESET:
        return {
          ...state,
          successDelete: false,
          deletedUserId: null,
          errorDelete: null,
        };
  
      default:
        return state;
    }
  };

  //GET_APPLICANT_INFO_REDUCER
    export const getSingleApplicantReducer = (state = { /* initial state */ }, action) => {
        switch (action.type) {
        // ... (other cases)
    
        case GET_APPLICANT_REQUEST:
            return { ...state, loading: true };
    
        case GET_APPLICANT_SUCCESS:
            return {
            ...state,
            loading: false,
            success: true,
            applicantsdData: action.payload,
            };
    
        case GET_APPLICANT_FAIL:
            return {
            ...state,
            loading: false,
            error: action.payload,
            };
    
        case GET_APPLICANT_RESET:
            return {
            ...state,
            success: false,
            applicantInfo: null,
            error: null,
            };
    
        default:
            return state;
        }
    };