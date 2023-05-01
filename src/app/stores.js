import { configureStore } from '@reduxjs/toolkit'
import ipAddressDetailsReducer from '../slices.js/ipAddressDetailsSlice'

export const store = configureStore({
  reducer: {
    ipAddressDetails: ipAddressDetailsReducer
  }
})
