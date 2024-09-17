import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth/authSlice.js';
import { productSlice } from './product/productSlice.js';


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    product: productSlice.reducer
  },
});
