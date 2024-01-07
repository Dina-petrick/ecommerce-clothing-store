import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";

import { CartDropdownContainer, EmptyMessage, CartItems  } from "./cart-dropdown.style";

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
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? cartItems?.map(item => {
          return <CartItem item = {item} key={item.id} />
        }) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutPage}>Go To Checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;