import React from "react";
import CartIcon from "../IconComponent/CartIcon";
import Favourite from "../IconComponent/Favourite";

const Product = ( {product}) => {
  
  return (
    <div className="product">
      <div>
        <img src={product.image_url} alt="" />
        <div className="product-actions">
          <button>
            <Favourite width={40} height={40} />
          </button>
          <button>
            <CartIcon color={"black"} width={40} height={40}/>
          </button>
        </div>
      </div>
      <div className="product-info">
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
