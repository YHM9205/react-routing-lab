// src/components/NavBar.jsx
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0', marginBottom: '1rem' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        </li>
        <li>
          <Link to="/products" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Products</Link>
        </li>
        <li>
          <Link to="/products/new" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Add Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;