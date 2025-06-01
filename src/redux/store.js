import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import loaderSlice  from './slices/loaderSlice'


export default configureStore({
  reducer: {
    authSlice: authSlice,
    loaderSlice: loaderSlice
  }
})