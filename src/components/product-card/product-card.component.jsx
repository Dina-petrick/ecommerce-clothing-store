import {
  ProductCartContainer,
  ProductImageWrap,
  Footer,
  Name,
  Price,
  AddToCartButton,
  QtyStepper,
  StepBtn,
  QtyDisplay,
  QtySub,
} from './product-card.style';

import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
import LazyImage from '../lazy-image/lazy-image.component';
import { formatPrice } from '../../utils/format-price';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart, cartItems, removeItemFromCart } =
    useContext(CartContext);

  const addToCart = () => {
    addItemToCart(product);
  };

  const itemInCart = cartItems.find((item) => item.id === product.id);
  const quantity = itemInCart?.quantity ?? 0;

  const removeItem = () => {
    if (itemInCart && itemInCart.quantity >= 1) {
      removeItemFromCart(itemInCart);
    }
  };

  return (
    <ProductCartContainer>
      <ProductImageWrap>
        <LazyImage src={imageUrl} alt={name} />
      </ProductImageWrap>
      <Footer>
        <Name>{name}</Name>
        <Price>{formatPrice(price)}</Price>
      </Footer>

      {quantity === 0 ? (
        <AddToCartButton type="button" onClick={addToCart}>
          Add to cart
        </AddToCartButton>
      ) : (
        <QtyStepper>
          <StepBtn
            type="button"
            aria-label={`Remove one ${name} from cart`}
            onClick={removeItem}
          >
            −
          </StepBtn>
          <QtyDisplay>
            {quantity}
            <QtySub>in cart</QtySub>
          </QtyDisplay>
          <StepBtn
            type="button"
            aria-label={`Add one more ${name}`}
            onClick={addToCart}
          >
            +
          </StepBtn>
        </QtyStepper>
      )}
    </ProductCartContainer>
  );
};

export default ProductCard;
