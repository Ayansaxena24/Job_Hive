import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; // Thunk middleware for Redux 

import { composeWithDevTools } from 'redux-devtools-extension'; // Redux DevTools Extension

//combine reducers
const reducer