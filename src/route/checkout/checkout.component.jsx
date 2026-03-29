import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';
import { UserContext } from '../../context/UserProvider.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { formatPrice } from '../../utils/format-price';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  EmptyCartWrap,
  EmptyTitle,
  EmptyText,
  ShopLink,
  CheckoutActions,
  AuthHint,
  ProceedToPaymentLink,
} from './checkout.style';

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  if (!cartItems.length) {
    return (
      <CheckoutContainer>
        <EmptyCartWrap>
          <EmptyTitle>Your cart is empty</EmptyTitle>
          <EmptyText>
            Add something from the shop, then return here to review your order.
          </EmptyText>
          <ShopLink to="/shop">Continue shopping</ShopLink>
        </EmptyCartWrap>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: {formatPrice(cartTotal)}</Total>

      <CheckoutActions>
        {currentUser ? (
          <ProceedToPaymentLink to="/payment">Proceed to payment</ProceedToPaymentLink>
        ) : (
          <>
            <AuthHint>
              Sign in to enter payment details and complete your purchase.
            </AuthHint>
            <ProceedToPaymentLink
              to="/auth"
              state={{ from: { pathname: '/payment' } }}
            >
              Sign in to pay
            </ProceedToPaymentLink>
          </>
        )}
      </CheckoutActions>

      <p
        style={{
          marginTop: 28,
          fontSize: 13,
          color: '#777',
          lineHeight: 1.5,
          textAlign: 'center',
        }}
      >
        Payment is on a separate secure step.{' '}
        <Link to="/shop" style={{ color: '#333' }}>
          Back to shop
        </Link>
      </p>
    </CheckoutContainer>
  );
};

export default CheckOut;
