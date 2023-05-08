import { createSlice } from '@reduxjs/toolkit'

export const errorMessageSlice = createSlice({
  name: 'errorMessage',
  initialState: {
    value: ''
  },
  reducers: {
    handleErrorMessage: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { handleErrorMessage } = errorMessageSlice.actions
export default errorMessageSlice.reducer
