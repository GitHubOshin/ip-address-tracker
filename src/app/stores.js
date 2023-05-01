import { configureStore } from '@reduxjs/toolkit'
import ipAddressDetailsReducer from '../slices/ipAddressDetailsSlice'
import ipAddressReducer from '../slices/ipAddressSlice'

export const store = configureStore({
  reducer: {
    ipAddressDetails: ipAddressDetailsReducer,
    ipAddress: ipAddressReducer
  }
})
