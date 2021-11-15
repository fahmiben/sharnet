import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice/userSlice';
import serviceSlice from './serviceSlice/serviceSlice';

export default configureStore({
    reducer: {
        user:userSlice,
        service:serviceSlice,
    },
})