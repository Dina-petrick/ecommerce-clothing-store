jest.mock('./utils/firebase/firebase.utils', () => {
  const actual = jest.requireActual('./utils/firebase/firebase.utils');
  return {
    ...actual,
    getCategoriesAndDocument: jest.fn(() => Promise.resolve({})),
  };
});

import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserProvider from './context/UserProvider.context';
import CategoriesProvider from './context/categories.context';
import CartProvider from './context/cart.context';
import { getCategoriesAndDocument } from './utils/firebase/firebase.utils';

test('renders shop navigation link', async () => {
  render(
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  );
  await waitFor(() => expect(getCategoriesAndDocument).toHaveBeenCalled());
  expect(screen.getByRole('link', { name: 'SHOP' })).toBeInTheDocument();
});
