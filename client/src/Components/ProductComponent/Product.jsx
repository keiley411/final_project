import React, { useState } from "react";
import { useAdminUser } from "../../Hooks";
import { SERVER_URL } from "../../constants";
import {
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "../../Features/api";
import Overlay from "../Overlay/Overlay";
import { addToCart, removeFromCart } from "../../Features/Cart/CartSlice";
import ProductForm from "./ProductForm/ProductForm";
import { useDispatch } from "react-redux";
import Rating from "../../Components/Rating/Rating";
import {
  addToWishList,
  removeFromWishList,
} from "../../Features/WishList/WishListSlice";
import "./Product.scss";
import Favourite from "../IconComponent/Favourite";

const Product = ({ product }) => {
  const [user, isAdmin] = useAdminUser();
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const [deleteProduct, deleteResult] = useDeleteProductMutation();

  const handleEditProduct = async (product) => {
    // TODO open edit form
    console.log("Open Edit Form ", product);
    setIsEditing(true);
  };

  const handleDeleteProduct = async (product_id) => {
    deleteProduct(product_id);
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isEditing && (
        <Overlay onClose={() => setIsEditing(false)}>
          <ProductForm
            isEditing={isEditing}
            category_id={product.category_id}
            initial_data={product}
          />
        </Overlay>
      )}
      <div className="product">
        <div className="product-img">
          <img
            src={`${SERVER_URL}/${product.image_url}`}
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div className="wishlist-icon">
          <button onClick={() => dispatch(addToWishList(product))}>
            <Favourite className="icon" width={25} height={25} />
          </button>
        </div>
        <div className="product-info">
          <p>{product.name}</p>
          <p>Ksh {product.price}</p>
          <p>{product.description}</p>

          <div className="rate">
            <Rating />
          </div>

          {isAdmin ? (
            <div className="admin-actions">
              <button onClick={() => handleEditProduct(product)}>Edit</button>
              <button onClick={() => handleDeleteProduct(product.id)}>
                {deleteResult.isLoading ? "Deleting" : "Delete"}
              </button>
            </div>
          ) : (
            <button
              className="add-to-cart"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
