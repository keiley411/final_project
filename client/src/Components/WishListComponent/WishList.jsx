import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decrementProduct,
  incrementProduct,
  removeFromWishList,
} from "../../Features/WishList/WishListSlice"
import { SERVER_URL } from "../../constants";

const  WishList= () => {
  const wishlist = useSelector((state) => state.wishlist);
 
  const [addedProduct, setAddedProduct] = useState(null);
  console.log(wishlist);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   let price = wishlist.products.reduce((totalPrice, product) => {
  //     return totalPrice + product.price * product.quantity;
  //   }, 0);
  //   setTotalPrice(price);
  // }, [wishlist.products]);

  console.log(wishlist);
  return (
    wishlist.isOpen && (
      <div className="wishlist">
        <div className="wishlist-main">
          {wishlist.products.map((product) => (
            <div className="wishlist-product" key={product.id}>
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
                  onClick={() => dispatch(removeFromWishList({ id: product.id }))}
                >
                  Remove From WishList
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>
    )
  );
};

export default WishList;
