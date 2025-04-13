import  { combineReducers } from '@reduxjs/toolkit';
import jobsReducer from './slices/jobsSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
    jobs: jobsReducer,
    user: userReducer,
});

export default rootReducer;