import React from 'react'
import DeleteIcon from "../IconComponent/DeleteIcon";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from '../../Features/Cart/CartSlice';
import cartLengthSelector from '../../Features/Cart/CartPrice/length'
import "./Delete.scss"
const DeleteCart = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.cart);
    const cartCount = cartLengthSelector(state);
  return (
    <header className="header">
      <span className="site-title">store.name</span>
      <nav className="site-nav">
        <button onClick={() => dispatch(toggleCart())}>
          <span>{cartCount}</span>
          <DeleteIcon width={44} height={44} />
        </button>
      </nav>
    </header>
  )
}

export default DeleteCart