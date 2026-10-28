// src/pages/CreateProduct/CreateProduct.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { createProduct } from '../../services/productService';

const emptyForm = { title: '', description: '', category: '', price: '', quantity: '' };

const CreateProduct = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    createProduct({
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
    })
      .then((created) => navigate(`/products/${created._id}`))
      .catch(() => setError('Could not create the product. Please try again.'))
      .finally(() => setSubmitting(false));
  };

  if (submitting) return <Spin tip="Creating product..." />;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <label>
        Title
        <input name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <label>
        Description
        <input name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <label>
        Category
        <input name="category" value={formData.category} onChange={handleChange} required />
      </label>
      <label>
        Price
        <input name="price" type="number" min="0" value={formData.price} onChange={handleChange} required />
      </label>
      <label>
        Quantity
        <input name="quantity" type="number" min="0" value={formData.quantity} onChange={handleChange} required />
      </label>
      <button type="submit">Create</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default CreateProduct;
