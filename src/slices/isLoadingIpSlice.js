import { createSlice } from '@reduxjs/toolkit'

export const isLoadingIpSlice = createSlice({
  name: 'isLoadingIP',
  initialState: {
    value: false
  },
  reducers: {
    handleIsloadingIP: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { handleIsloadingIP } = isLoadingIpSlice.actions
export default isLoadingIpSlice.reducer
