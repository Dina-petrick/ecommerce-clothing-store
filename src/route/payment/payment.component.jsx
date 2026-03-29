import { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';
import FormInput from '../../components/form-input/form-input.component';
import { formatPrice } from '../../utils/format-price';
import {
  processDummyPayment,
  formatCardGroups,
  formatExpiryInput,
  validateNameOnCard,
  validateCardNumberField,
  validateExpiryField,
  validateCvcField,
} from '../../utils/payment.utils';
import {
  PaymentWrap,
  PaymentTitle,
  PaymentHint,
  FormGrid,
  FullRow,
  PayButton,
  ErrorBanner,
} from '../../components/payment-section/payment-section.style';
import {
  SuccessWrap,
  SuccessPanel,
  SuccessTitle,
  SuccessMeta,
  Mono,
  DemoNote,
  ContinueLink,
} from '../checkout/checkout-order-success.style';
import {
  PaymentPageContainer,
  BackLink,
  OrderSummary,
} from './payment.style';

const emptyErrors = {
  nameOnCard: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
};

const PaymentPage = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);

  const [nameOnCard, setNameOnCard] = useState('');
  const [cardDisplay, setCardDisplay] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [errors, setErrors] = useState(emptyErrors);
  const [completedOrder, setCompletedOrder] = useState(null);

  const cardDigits = cardDisplay.replace(/\D/g, '');
  const amountCents = Math.round(Number(cartTotal) * 100);

  const handleCardChange = (e) => {
    setCardDisplay(formatCardGroups(e.target.value));
    setErrors((prev) => ({ ...prev, cardNumber: '' }));
    setFormError('');
  };

  const handleExpiryChange = (e) => {
    setExpiry(formatExpiryInput(e.target.value));
    setErrors((prev) => ({ ...prev, expiry: '' }));
    setFormError('');
  };

  const handleCvcChange = (e) => {
    setCvc(e.target.value.replace(/\D/g, '').slice(0, 4));
    setErrors((prev) => ({ ...prev, cvc: '' }));
    setFormError('');
  };

  const runFieldValidation = () => {
    return {
      nameOnCard: validateNameOnCard(nameOnCard),
      cardNumber: validateCardNumberField(cardDigits),
      expiry: validateExpiryField(expiry),
      cvc: validateCvcField(cvc),
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    const next = runFieldValidation();
    setErrors(next);

    if (next.nameOnCard || next.cardNumber || next.expiry || next.cvc) {
      return;
    }

    setSubmitting(true);
    try {
      const result = await processDummyPayment({
        cardNumberDigits: cardDigits,
        expiryMmYy: expiry,
        cvc,
        nameOnCard,
        amountCents,
      });

      if (result.ok) {
        setCompletedOrder({
          ...result,
          paidDisplay: cartTotal,
          nameOnCard: nameOnCard.trim(),
        });
        clearCart();
        return;
      }

      if (result.field) {
        setFormError('');
        setErrors((prev) => ({
          ...prev,
          [result.field]: result.error,
        }));
      } else {
        setFormError(result.error || 'Payment failed.');
      }
    } catch {
      setFormError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (completedOrder) {
    const firstName = completedOrder.nameOnCard?.split(' ')[0] || 'there';
    return (
      <PaymentPageContainer>
        <SuccessWrap>
          <SuccessPanel role="status">
            <SuccessTitle>Payment successful</SuccessTitle>
            <SuccessMeta>
              Thank you, {firstName}. Your order is confirmed.
            </SuccessMeta>
            <SuccessMeta>
              Charged:{' '}
              <strong>{formatPrice(completedOrder.paidDisplay)}</strong> ·{' '}
              {completedOrder.brand} ·••• {completedOrder.last4}
            </SuccessMeta>
            <SuccessMeta>
              Transaction ID: <Mono>{completedOrder.transactionId}</Mono>
            </SuccessMeta>
            <DemoNote>
              This was a simulated payment — no real money was charged.
            </DemoNote>
          </SuccessPanel>
          <ContinueLink to="/shop">Continue shopping</ContinueLink>
        </SuccessWrap>
      </PaymentPageContainer>
    );
  }

  if (!cartItems.length) {
    return <Navigate to="/checkout" replace />;
  }

  return (
    <PaymentPageContainer>
      <BackLink type="button" onClick={() => navigate('/checkout')}>
        ← Back to cart
      </BackLink>

      <OrderSummary>
        <strong>Order total:</strong> {formatPrice(cartTotal)} ·{' '}
        {cartItems.reduce((n, i) => n + i.quantity, 0)} items
      </OrderSummary>

      <PaymentWrap>
        <PaymentTitle>Payment details</PaymentTitle>
        <PaymentHint>
          All fields are validated like a real checkout. Test success:{' '}
          <strong>4242 4242 4242 4242</strong>, future MM/YY, 3-digit CVC.
          Decline test: <strong>4000 0000 0000 0002</strong>.
        </PaymentHint>

        {formError ? (
          <ErrorBanner role="alert">{formError}</ErrorBanner>
        ) : null}

        <form onSubmit={handleSubmit} noValidate>
          <FormGrid>
            <FullRow>
              <FormInput
                label="Name on card"
                name="nameOnCard"
                value={nameOnCard}
                error={errors.nameOnCard}
                onChange={(e) => {
                  setNameOnCard(e.target.value);
                  setErrors((p) => ({ ...p, nameOnCard: '' }));
                  setFormError('');
                }}
                autoComplete="cc-name"
                onBlur={(e) =>
                  setErrors((p) => ({
                    ...p,
                    nameOnCard: validateNameOnCard(e.target.value),
                  }))
                }
              />
            </FullRow>
            <FullRow>
              <FormInput
                label="Card number"
                name="cardNumber"
                inputMode="numeric"
                value={cardDisplay}
                error={errors.cardNumber}
                onChange={handleCardChange}
                onBlur={() =>
                  setErrors((p) => ({
                    ...p,
                    cardNumber: validateCardNumberField(cardDigits),
                  }))
                }
                autoComplete="cc-number"
              />
            </FullRow>
            <FormInput
              label="Expiry (MM/YY)"
              name="expiry"
              inputMode="numeric"
              placeholder="MM/YY"
              value={expiry}
              error={errors.expiry}
              onChange={handleExpiryChange}
              onBlur={() =>
                setErrors((p) => ({
                  ...p,
                  expiry: validateExpiryField(expiry),
                }))
              }
              autoComplete="cc-exp"
            />
            <FormInput
              label="CVC"
              name="cvc"
              inputMode="numeric"
              value={cvc}
              error={errors.cvc}
              onChange={handleCvcChange}
              onBlur={() =>
                setErrors((p) => ({ ...p, cvc: validateCvcField(cvc) }))
              }
              autoComplete="cc-csc"
            />
          </FormGrid>
          <PayButton type="submit" disabled={submitting}>
            {submitting ? 'Processing…' : `Pay ${formatPrice(cartTotal)}`}
          </PayButton>
        </form>
      </PaymentWrap>

      <p style={{ marginTop: 24, fontSize: 13, color: '#777' }}>
        <Link to="/checkout" style={{ color: '#333' }}>
          Edit cart
        </Link>{' '}
        ·{' '}
        <Link to="/shop" style={{ color: '#333' }}>
          Continue shopping
        </Link>
      </p>
    </PaymentPageContainer>
  );
};

export default PaymentPage;
