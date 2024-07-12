import { Link } from 'react-router-dom';
import { CartOpenContext } from '../../App';
import React, { useContext } from 'react';

export function NavBar() {
  const [isCardOpen, setIsCartOpen] = useContext(CartOpenContext);

  return (
    <nav>
      <Link to='/odin-shopping-cart/'>Home</Link>
      <Link to='/odin-shopping-cart/shop'>Shop</Link>
      <div onClick={() => setIsCartOpen(!isCardOpen)}>
        <span className='iconify cart-icon' data-icon='mdi-cart'></span>
      </div>
    </nav>
  );
}
