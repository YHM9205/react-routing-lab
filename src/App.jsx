// src/App.jsx
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<h1>Home Page - Grocery Store Product Management</h1>} />
        {/* أضف باقي المسارات هنا مثل:
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/new" element={<NewProductForm />} />
        */}
      </Routes>
    </div>
  );
};

export default App;