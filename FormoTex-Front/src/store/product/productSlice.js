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
    },
    deleteProductRedux: (state, { payload }) => {
      // Filtra los productos y elimina el que coincide con el ID pasado en payload
      state.products = state.products.filter(product => product._id !== payload);
    }
  }
})

export const { showProducts, clearProducts, deleteProductRedux } = productSlice.actions