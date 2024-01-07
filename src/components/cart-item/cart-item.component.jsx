import React, { useContext } from 'react'

import { CartContext } from '../../context/cart.context';

import { CartItemContainer, CartImg, ItemDetails, Name, ButtonX } from './cart-item.style';
const CartItem = ({item}) => {

    const {imageUrl, name, price, quantity} = item;

    const {removeItemFromCart} = useContext(CartContext);
    
    const removeItem = () => {
      return removeItemFromCart(item)
    };
  return (
    <CartItemContainer>
      <CartImg src={imageUrl} alt= {name} />
      <ItemDetails>
        <Name>{name}</Name>
        <p className='price'>{quantity} X {price}</p>
      </ItemDetails>

        <ButtonX onClick={removeItem}>X</ButtonX>
    </CartItemContainer>
  )
}

export default CartItem;