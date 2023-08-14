import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; // Thunk middleware for Redux 

import { composeWithDevTools } from 'redux-devtools-extension'; // Redux DevTools Extension

//combine reducers
const reducer = combineReducers({});


//initial state
let initialState = {};
const middleware = [thunk]; 
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); //create store //composeWithDevTools(applyMiddleware(...middleware)) is for redux devtools extension //