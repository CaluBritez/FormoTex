import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    errorMessage: undefined
  },
  reducers: {
    showProducts: (state, { payload }) => {
      state.products = payload
      state.errorMessage = undefined
    },
    clearProducts: (state) => {
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