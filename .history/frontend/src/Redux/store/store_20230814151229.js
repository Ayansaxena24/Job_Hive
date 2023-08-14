import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; // Thunk middleware for Redux 

import { composeWithDevTools } from 'redux-devtools-extension'; // Redux DevTools Extension
import { loadJobReducer } from '../red';

//combine reducers
const reducer = combineReducers({
    loadJobs: loadJobReducer
});


//initial state
let initialState = {};
const middleware = [thunk]; 
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); //create store //composeWithDevTools(applyMiddleware(...middleware)) is for redux devtools extension //applyMiddleware(...middleware) is for thunk middleware
 export default store; //export store