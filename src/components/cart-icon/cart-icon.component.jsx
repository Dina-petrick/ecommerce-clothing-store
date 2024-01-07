import { CartIconContainer, ShopCartIcon, ItemCount } from "./cart-icon.style";

import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CartIcon = () => {

  const { isCartOpen, setIsCartOpen, count } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShopCartIcon/>
        <ItemCount>{count}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;