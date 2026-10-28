import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Spin, Alert } from 'antd';
import { getProductById } from '../../services/productService';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getProductById(productId)
      .then((data) => setProduct(data))
      .catch(() => setError('Could not load this product. Please try again later.'))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <Spin tip="Loading product..." />;
  if (error) return <Alert type="error" message={error} />;
  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <Link to="/products">Back to products</Link>
    </div>
  );
};

export default ProductDetails;
