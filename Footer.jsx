
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/product-details">Products</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About Us</Link>
    </nav>
  );
}

export default Navbar;
