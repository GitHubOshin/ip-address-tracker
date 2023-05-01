import { createSlice } from '@reduxjs/toolkit'

export const ipAddressDetailsSlice = createSlice({
  name: 'ipAddressDetails',
  initialState: {
    value: {}
  },
  reducers: {
    addIpAddressDetails: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { addIpAddressDetails } = ipAddressDetailsSlice.actions
export default ipAddressDetailsSlice.reducer
