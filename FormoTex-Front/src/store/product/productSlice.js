import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    userState: 'not-authenticated',
    products: [],
    errorMessage: undefined
  },
  reducers: {
    showProducts: (state, { payload }) => {
      state.userState = 'authenticated'
      state.products = payload
      state.errorMessage = undefined
    },
    clearProducts: (state) => {
      state.userState = 'not-authenticated'
      state.products = []
      state.errorMessage = undefined
    }
  }
})

// Action creators are generated for each case reducer function
export const { showProducts, clearProducts } = productSlice.actions