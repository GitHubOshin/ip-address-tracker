import { configureStore } from '@reduxjs/toolkit'
import ipAddressDetailsReducer from '../slices/ipAddressDetailsSlice'
import ipAddressReducer from '../slices/ipAddressSlice'
import isLoadingIpReducer from '../slices/isLoadingIpSlice'
import errorMessageReducer from '../slices/errorMessageSlice'

export const store = configureStore({
  reducer: {
    ipAddressDetails: ipAddressDetailsReducer,
    ipAddress: ipAddressReducer,
    isLoadingIP: isLoadingIpReducer,
    errorMessage: errorMessageReducer
  }
})
