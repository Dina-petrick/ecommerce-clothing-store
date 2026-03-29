import React, { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import LazyImage from '../lazy-image/lazy-image.component';
import { formatPrice } from '../../utils/format-price';

import {
  CartItemContainer,
  ThumbWrap,
  ItemDetails,
  Name,
  PriceLine,
  RemoveBtn,
} from './cart-item.style';

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;

  const { removeItemFromCart } = useContext(CartContext);

  const removeItem = () => removeItemFromCart(item);

  return (
    <CartItemContainer>
      <ThumbWrap>
        <LazyImage src={imageUrl} alt={name} />
      </ThumbWrap>
      <ItemDetails>
        <Name>{name}</Name>
        <PriceLine>
          {quantity} × {formatPrice(price)}
        </PriceLine>
      </ItemDetails>

      <RemoveBtn
        type="button"
        onClick={removeItem}
        aria-label={`Remove ${name} from cart`}
      >
        ×
      </RemoveBtn>
    </CartItemContainer>
  );
};

export default CartItem;
