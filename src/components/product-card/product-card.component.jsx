import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.style';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';


const ProductCard = ({product}) => {
  const {name,price, imageUrl} = product;

  const { addItemToCart } = useContext(CartContext)

  const addToCart = () => addItemToCart(product)

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button 
      buttonType={BUTTON_TYPE_CLASSES.inverted}
      onClick={addToCart}>
        Add to card
      </Button>
    </ProductCartContainer>
  )
}

export default ProductCard;