// src/pages/ProductList/ProductList.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spin, Alert } from 'antd';
import { getProducts } from '../../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch(() => setError('Could not load products. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spin tip="Loading products..." />;
  if (error) return <Alert type="error" message={error} />;

  return (
    <div>
      <h2>Grocery Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id} style={{ margin: '0.5rem 0' }}>
            <Link to={`/products/${product._id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
