import { createSlice } from '@reduxjs/toolkit'

export const ipAddressSlice = createSlice({
  name: 'ipAddress',
  initialState: {
    value: ''
  },
  reducers: {
    handleFindIpAddress: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { handleFindIpAddress } = ipAddressSlice.actions
export default ipAddressSlice.reducer
