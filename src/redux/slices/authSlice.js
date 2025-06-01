import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    username: '',
    token: ''
  },
  reducers: {
    setAuth: (state, action) => {
      state.email = action.payload.email
      state.username = action.payload.username
      state.token = action.payload.token
    },
    removeAuth: (state) => {
      state.email = ''
      state.username = ''
      state.token = ''
    }
  }
})


export const { setAuth, removeAuth } = authSlice.actions

export default authSlice.reducer