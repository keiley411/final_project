import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../Features/WishList/WishListSlice';

const WishList = () => {
  const wishlistProduct = useSelector(state => state.wishlist.products);
  const dispatch = useDispatch();

  const handleAddToWishlist = (product) => {
    dispatch(addProduct(product));
  };

  const handleRemoveFromWishlist = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div>
      
      <ul>
        {wishlistProduct.map(product => (
          <li key={product.id}>
            {product.name} 
            <button onClick={() => handleRemoveFromWishlist(product)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;

