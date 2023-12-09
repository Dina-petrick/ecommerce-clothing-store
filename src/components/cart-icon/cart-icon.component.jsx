import "./cart-icon.style.scss";
import { ReactComponent as ShopCartIcon } from "../../assets/images/shopping-bag.svg" 

import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CartIcon = () => {

  const { isCartOpen, setIsCartOpen, count } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
        <ShopCartIcon className='shopping-icon' />
        <span className="item-count">{count}</span>
    </div>
  )
}

export default CartIcon;