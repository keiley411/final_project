import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    products: [],
    isOpen: false,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload.product);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addProduct, removeProduct } = wishlistSlice.actions;
export default wishlistSlice.reducer;
