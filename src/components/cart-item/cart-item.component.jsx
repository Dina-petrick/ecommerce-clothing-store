import React, { useContext } from 'react'

import { CartContext } from '../../context/cart.context';
import "./cart-item.style.scss";

const CartItem = ({item}) => {

    const {imageUrl, name, price, quantity} = item;

    const {removeItemFromCart} = useContext(CartContext);
    
    const removeItem = () => {
      console.log(item)
      console.log('hit', removeItemFromCart(item))
      return removeItemFromCart(item)
    };
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt= {name} />
      <div className="item-details">
        <div className='name'>{name}</div>
        <div className='price'>{quantity} X {price}</div>
      </div>

        <button onClick={removeItem}>X</button>
    </div>
  )
}

export default CartItem