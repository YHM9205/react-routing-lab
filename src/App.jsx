// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Homepage from './pages/ProductDetails/Homepage'
import ProductList from './pages/ProductList/ProductList'
import CreateProduct from './pages/CreateProduct/CreateProduct'
import ProductDetails from './pages/ProductDetails/ProductDetails'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/new-product" element={<CreateProduct />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </div>
  );
};

export default App;
