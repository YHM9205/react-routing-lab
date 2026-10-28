// src/services/productService.js
const API_URL = import.meta.env.VITE_API_URL;

const request = async (path, options) => {
  const response = await fetch(`${API_URL}${path}`, options);
  if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
  return response.json();
};

export const getProducts = async () => {
  try {
    return await request('/products');
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    return await request(`/products/${productId}`);
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    return await request('/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};
