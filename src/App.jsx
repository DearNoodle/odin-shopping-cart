import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useState } from 'react';
import routes from './routes';

const router = createBrowserRouter(routes);

export const CartOpenContext = React.createContext();

export const CartItemContext = React.createContext();

export function App() {
  const [isCardOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  return (
    <CartOpenContext.Provider value={{ isCardOpen, setIsCartOpen }}>
      <CartItemContext.Provider value={{ cartItem, setCartItem }}>
        <RouterProvider router={router} />
      </CartItemContext.Provider>
    </CartOpenContext.Provider>
  );
}
