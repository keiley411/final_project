import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
    isOpen: false,
  },
  reducers: {
    addToWishList: (state, action) => {
      const productAlreadyInWishList = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (productAlreadyInWishList) {
        const newState = {
          ...state,
          products: state.products.filter(
            (product) => product.id != action.payload.id
          ),
        };
        return newState;
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    },

    removeFromWishList: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id != action.payload.id
        ),
      };
    },

    toggleWishList: (state) => {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    },
  },
});

export const { addToWishList, removeFromWishList, toggleWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;