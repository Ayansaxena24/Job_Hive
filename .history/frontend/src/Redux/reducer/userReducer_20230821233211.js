import { USER_APPLY_JOB_REQUEST, USER_LOAD_FAIL, USER_LOAD_REQUEST, USER_LOAD_RESET, USER_LOAD_SUCCESS, USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_RESET, USER_LOGOUT_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_RESET, USER_SIGNIN_SUCCESS } from "../constants/userConstant"


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

//user profile
export const userReducerProfile = (state = {}, action) => {
    switch (action.type) {
        case USER_LOAD_REQUEST:
            return { loading: true }
            case USER_LOAD_SUCCESS:        
                return {
                    loading : false,
                    userJob : action.payload
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
        case USER_APPLY_JOB_REQUEST:
            return { loading: true, user: null }
            case USER_App:        
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

