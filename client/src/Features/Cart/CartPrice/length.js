
import { createSelector } from "@reduxjs/toolkit";

/**
 * 
 * @param {*} state 
 * @returns {{products: object[], isOpen: boolean}}
 */
const cartSelector = (state) => state;

const cartLengthSelector = createSelector([cartSelector], (cart) => {
 
  return cart.products ? cart.products.length : 0;
});

const cartTotalPriceSelector = createSelector([cartSelector], (cart) => {
 
  if (cart.products && cart.products.length > 0) {
    return cart.products.reduce((totalPrice, product) => {
      return totalPrice + (product.price * product.quantity);
    }, 0);
  } else {
    return 0;
  }
});

export { cartLengthSelector, cartTotalPriceSelector };
