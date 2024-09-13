import { configureStore, combineReducers } from '@reduxjs/toolkit';
import  counterReducer  from '../features/CounterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});