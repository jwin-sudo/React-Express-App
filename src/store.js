import {
    createStore
 } from 'redux';
 import CombinedReducers from './reducers.js';
 
 const store = createStore(CombinedReducers);
 
 export default store