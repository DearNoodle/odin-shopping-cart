import { Link } from 'react-router-dom';
import './nav.css';

export function NavBar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
    </nav>
  );
}
