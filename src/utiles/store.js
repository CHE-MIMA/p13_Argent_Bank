import authReducer from '../features/auth'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        auth: authReducer,

    },
})
