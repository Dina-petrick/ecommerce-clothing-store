import { useContext } from 'react';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  ArrowBtn,
  Value,
  RemoveCol,
  RemoveButton,
} from './checkout-item.style';

import { CartContext } from '../../context/cart.context';
import LazyImage from '../lazy-image/lazy-image.component';
import { formatPrice } from '../../utils/format-price';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <LazyImage src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <ArrowBtn
          type="button"
          onClick={removeItemHandler}
          aria-label={`Decrease ${name}`}
        >
          &#10094;
        </ArrowBtn>
        <Value>{quantity}</Value>
        <ArrowBtn
          type="button"
          onClick={addItemHandler}
          aria-label={`Increase ${name}`}
        >
          &#10095;
        </ArrowBtn>
      </Quantity>
      <BaseSpan>{formatPrice(price)}</BaseSpan>
      <RemoveCol>
        <RemoveButton
          type="button"
          onClick={clearItemHandler}
          aria-label={`Remove ${name}`}
        >
          &#10005;
        </RemoveButton>
      </RemoveCol>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
