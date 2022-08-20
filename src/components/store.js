import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './reducer'
export const store = configureStore({
    reducer: {
        basket:basketReducer ,
    },
});