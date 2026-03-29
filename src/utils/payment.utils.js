/** Luhn algorithm — same check used by real card validators. */
export const isValidLuhn = (digitsOnly) => {
  if (!digitsOnly || digitsOnly.length < 13) return false;
  let sum = 0;
  let alt = false;
  for (let i = digitsOnly.length - 1; i >= 0; i--) {
    let n = parseInt(digitsOnly[i], 10);
    if (Number.isNaN(n)) return false;
    if (alt) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alt = !alt;
  }
  return sum % 10 === 0;
};

export const parseExpiry = (expiryMmYy) => {
  const cleaned = expiryMmYy.replace(/\D/g, '');
  if (cleaned.length !== 4) return null;
  const month = parseInt(cleaned.slice(0, 2), 10);
  const year = parseInt(cleaned.slice(2, 4), 10);
  if (month < 1 || month > 12) return null;
  return { month, year: 2000 + year };
};

export const isExpiryValid = (expiryMmYy) => {
  const parsed = parseExpiry(expiryMmYy);
  if (!parsed) return false;
  const y = parsed.year;
  if (y > new Date().getFullYear() + 25) return false;
  const lastMs = new Date(y, parsed.month, 0, 23, 59, 59, 999).getTime();
  return lastMs >= Date.now();
};

/** Inline field validation — empty string means valid */
export const validateNameOnCard = (value) => {
  const t = (value || '').trim();
  if (!t) return 'Name is required.';
  if (t.length < 2) return 'Enter at least 2 characters.';
  return '';
};

export const validateCardNumberField = (digitsOnly) => {
  if (!digitsOnly || digitsOnly.length < 13) {
    return 'Enter a complete card number (13–19 digits).';
  }
  if (!isValidLuhn(digitsOnly)) {
    return 'This card number is not valid.';
  }
  return '';
};

export const validateExpiryField = (expiryMmYy) => {
  const cleaned = (expiryMmYy || '').replace(/\D/g, '');
  if (cleaned.length !== 4) {
    return 'Enter expiry as MM/YY.';
  }
  if (!parseExpiry(expiryMmYy)) {
    return 'Month must be between 01 and 12.';
  }
  if (!isExpiryValid(expiryMmYy)) {
    return 'This card is expired or the date is invalid.';
  }
  return '';
};

export const validateCvcField = (cvc) => {
  const c = (cvc || '').replace(/\D/g, '');
  if (!c) return 'Security code is required.';
  if (c.length < 3 || c.length > 4) {
    return 'Enter 3 or 4 digits.';
  }
  return '';
};

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Simulates a payment gateway: network delay, validation, decline rules.
 * Returns optional `field` for mapping errors to inputs.
 */
export const processDummyPayment = async ({
  cardNumberDigits,
  expiryMmYy,
  cvc,
  nameOnCard,
  amountCents,
}) => {
  await delay(1400 + Math.floor(Math.random() * 900));

  const name = (nameOnCard || '').trim();
  if (name.length < 2) {
    return {
      ok: false,
      error: 'Enter the name as it appears on your card.',
      field: 'nameOnCard',
    };
  }

  if (!isValidLuhn(cardNumberDigits)) {
    return {
      ok: false,
      error: 'Invalid card number.',
      field: 'cardNumber',
    };
  }

  if (!isExpiryValid(expiryMmYy)) {
    return {
      ok: false,
      error: 'Invalid or expired card.',
      field: 'expiry',
    };
  }

  const cvcClean = (cvc || '').replace(/\D/g, '');
  if (cvcClean.length < 3 || cvcClean.length > 4) {
    return {
      ok: false,
      error: 'Invalid security code.',
      field: 'cvc',
    };
  }

  if (cardNumberDigits === '4000000000000002') {
    return {
      ok: false,
      error: 'Your card was declined. Try a different card.',
      field: 'cardNumber',
      code: 'card_declined',
    };
  }

  if (cardNumberDigits.endsWith('9999') && cardNumberDigits.length >= 16) {
    return {
      ok: false,
      error: 'Insufficient funds.',
      field: 'cardNumber',
      code: 'insufficient_funds',
    };
  }

  const transactionId = `txn_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 11)}`;

  return {
    ok: true,
    transactionId,
    amountCents: Math.round(amountCents),
    last4: cardNumberDigits.slice(-4),
    brand: cardNumberDigits[0] === '4' ? 'Visa' : 'Card',
  };
};

export const formatCardGroups = (digits) => {
  const d = digits.replace(/\D/g, '').slice(0, 19);
  return d.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
};

export const formatExpiryInput = (value) => {
  const d = value.replace(/\D/g, '').slice(0, 4);
  if (d.length <= 2) return d;
  return `${d.slice(0, 2)}/${d.slice(2)}`;
};
