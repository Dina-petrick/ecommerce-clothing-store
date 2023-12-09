import "./cart-dropdown.style.scss";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";

import "./cart-dropdown.style.scss"

import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {

  const { cartItems, setIsCartOpen, IsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutPage = () => {
    navigate('/checkout')
    setIsCartOpen(IsCartOpen)
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map(item => {
          return <CartItem item = {item} key={item.id} />
        })}
      </div>
      <Button onClick={goToCheckOutPage}>Go To Checkout</Button>
    </div>
  )
}

export default CartDropdown;