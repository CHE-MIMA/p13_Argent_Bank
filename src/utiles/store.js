import userReducer from '../auth/AuthReducers'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        userReducer,

    },
})
