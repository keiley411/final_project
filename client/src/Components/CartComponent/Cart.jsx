import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.scss";
import {
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from "../../Features/Cart/CartSlice";
import { SERVER_URL } from "../../constants";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addedProduct, setAddedProduct] = useState(null);
  console.log(cart);

  const dispatch = useDispatch();
  useEffect(() => {
    let price = cart.products.reduce((totalPrice, product) => {
      return totalPrice + product.price * product.quantity;
    }, 0);
    setTotalPrice(price);
  }, [cart.products]);

  console.log(cart);
  return (
    cart.isOpen && (
      <div className="cart">
        <div className="cart-main">
          {cart.products.map((product) => (
            <div className="cart-product" key={product.id}>
              <img
                src={`${SERVER_URL}/${product.image_url}`}
                alt={`${product.name} image`}
              />

              <div className="info">
                <div className="details">
                  <span className="title">{product.name}</span>
                  <span className="title">Ksh {product.price}</span>
                </div>

                <div className="actions">
                  <button
                    disabled={product.quantity <= 1}
                    onClick={() =>
                      dispatch(decrementProduct({ id: product.id }))
                    }
                  >
                    -
                  </button>
                  <span className="quantity">{product.quantity}</span>
                  <button
                    disabled={product.quantity >= product.stock}
                    onClick={() =>
                      dispatch(incrementProduct({ id: product.id }))
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="remove-actions">
                <button
                  onClick={() => dispatch(removeFromCart({ id: product.id }))}
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <p>Total Price:Ksh {totalPrice}</p>
        </div>
      </div>
    )
  );
};

export default Cart;
