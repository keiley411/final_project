import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeFromWishList } from "../../Features/WishList/WishListSlice";
import { SERVER_URL } from "../../constants";
import "./WishList.scss";
const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist);
  console.log(wishlist);

  const dispatch = useDispatch();
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
              </div>

              <div className="remove-actions">
                <button
                  onClick={() =>
                    dispatch(removeFromWishList({ id: product.id }))
                  }
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
