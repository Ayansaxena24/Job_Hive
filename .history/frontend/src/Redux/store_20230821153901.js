import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; // Thunk middleware for Redux 

import { composeWithDevTools } from 'redux-devtools-extension'; // Redux DevTools Extension
import { loadJobReducer, loadJobSingleReducer } from './reducer/jobReducer';
import { loadJobTypeReducer } from './reducer/jobTypeReducer';
import { userReducerLogout, userReducerProfile, userReducerSignIn } from './reducer/userReducer';

//combine reducers
const reducer = combineReducers({
    loadJobs: loadJobReducer,
    jobTypeAll: loadJobTypeReducer,
    signIn: userReducerSignIn,
    logOut : userReducerLogout,
    userProfile : userReducerProfile,
    single
});


//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null //get user info from local storage //if user info is in local storage then parse it to json else null
    }
};


const middleware = [thunk]; 
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); //create store //composeWithDevTools(applyMiddleware(...middleware)) is for redux devtools extension //applyMiddleware(...middleware) is for thunk middleware
 export default store; //export store