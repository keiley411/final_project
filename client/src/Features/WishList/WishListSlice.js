import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishList: (state, action) => {
      const productAlreadyInWishList = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (productAlreadyInWishList) {
        const newState = {
          ...state,
          products: state.products.map((product) => {
            if (product.id === productAlreadyInWishList.id) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            }
            return product;
          }),
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

    incrementProduct: (state, action) => {
      const newProducts = state.products.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      );

      return {
        ...state,
        products: newProducts,
      };
    },

    decrementProduct: (state, action) => {
      const newProducts = state.products.map((product) =>
        product.id === action.payload.id && product.quantity > 1
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : product
      );
      return {
        ...state,
        products: newProducts,
      };
    },
  },
});

export const { addToWishList, removeFromWishList,decrementProduct, incrementProduct,toggleWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
