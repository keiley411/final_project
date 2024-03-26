import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
    products: [],
    isOpen: false,
}
const CartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {

        addToCart: (state, action) => {
            const productAlreadyInCart = state.products.find((product) => product.id === action.payload.id);

            if (productAlreadyInCart) {
                const newState = {
                    ...state,
                    products: state.products.map((product) => {
                        if (product.id === productAlreadyInCart.id) {
                            return {
                                ...product,
                                quantity: product.quantity + 1
                            }
                        }
                        return product
                    })
                }
                return newState;
            }
            return {
                ...state,
                products: [
                    ...state.products, { ...(action.payload), quantity: 1 }
                ]
            }
        },

        removeFromCart: (state, action) => {
            return {
                ...state,
                products: state.products.filter((product) => product.id != action.payload.id)
            }
        },

        toggleCart: (state) => {
            return {
                ...state,
                isOpen: !state.isOpen
            }
        },

        incrementProduct: (state, action) => {
            const newProducts = state.products.map((product) =>
                (product.id === action.payload.id) ? ({
                    ...product,
                    quantity: product.quantity + 1
                }) :
                    product
            );

            return {
                ...state,
                products: newProducts
            }
        },

        decrementProduct: (state, action) => {
            const newProducts = state.products.map((product) =>
                (product.id === action.payload.id && product.quantity > 1) ? ({
                    ...product,
                    quantity: product.quantity - 1
                }) :
                    product
            );
            return {
                ...state,
                products: newProducts,
            }
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    toggleCart,
    decrementProduct,
    incrementProduct
} = CartSlice.actions;

export default CartSlice.reducer;