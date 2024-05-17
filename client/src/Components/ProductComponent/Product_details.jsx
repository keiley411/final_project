import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/Cart/CartSlice";
import Rating from "../Rating/Rating";
import { SERVER_URL } from "../../constants";
import Favourite from "../IconComponent/Favourite";
import {
  addToWishList,
  removeFromWishList,
} from "../../Features/WishList/WishListSlice";
import "./Product_details.scss"
const Product_details = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const { product_id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/products/${product_id}`);
        if (response.ok) {
          const productData = await response.json();
          console.log(productData);
          setProduct(productData.product);
        } else {
          throw new Error("Failed to fetch product");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();

    return () => {};
  }, [product_id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="info_product">
      <div className="product-image">
        <img
          src={`${SERVER_URL}/${product.image_url}`}
          alt=""
          width={250}
          height={200}
        />
      </div>
      <div className="wishlist-icons">
        <button onClick={() => dispatch(addToWishList(product))}>
          <Favourite className="icon" width={25} height={25} />
        </button>
      </div>
      <div className="product-infos">
        <p>{product.name}</p>
        <p>Ksh {product.price}</p>
        <p>{product.description}</p>

        <div className="rates">
          <Rating />
        </div>
        <button
          className="add-to-cart"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product_details;
