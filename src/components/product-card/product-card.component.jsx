import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  AddToCartBtn
} from './product-card.style';


import { CartContext } from '../../context/cart.context';
import { useContext, useEffect } from 'react';


const ProductCard = ({product}) => {
  const {name,price, imageUrl} = product;

  const { addItemToCart, cartItems, removeItemFromCart } = useContext(CartContext);
  
  useEffect(() => {
  })
  

  const addToCart = () => {
    addItemToCart(product);
  }
  
  const itemCart = cartItems.filter((item, key) => item.id === product.id)[0];
  const quantity = itemCart?.quantity;

  const removeItem = () => {
    if(itemCart && itemCart.quantity >= 1){
        removeItemFromCart(itemCart)
    }
  }



  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <AddToCartBtn>
        <div style={{width: '40px', fontSize: "20px"}}  onClick={removeItem}>-</div>
        <div style={{width: '160px'}} >{quantity ? quantity : "add to cart"}</div>
        <div style={{width: '40px',fontSize: "20px"}} onClick={addToCart}>+</div>
      </AddToCartBtn>
    </ProductCartContainer>
  );
}

export default ProductCard;