import { createSlice } from "@reduxjs/toolkit";


const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    pulseLoader: false,
    screenLoader: false,
    buttonLoader: false
  },
  reducers: {
    setPulseLoader: (state, action) => {
      state.pulseLoader = action.payload
    },
    setScreenLoader: (state, action) => {
      state.screenLoader = action.payload
    },
    setButtonLoader: (state, action) => {
      state.buttonLoader = action.payload
    },
  }
})


export const { setButtonLoader, setPulseLoader, setScreenLoader } = loaderSlice.actions

export default loaderSlice.reducer