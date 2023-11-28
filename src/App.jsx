import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Product from './pages/Product';

const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (data) => {
    setCart([...cart, data]);
  };

  return (
    <main className='App relative'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='products' element={<Products />} />
          <Route path='cart' element={<Cart cart={cart} />} />
          <Route path='product/:id' element={<Product addToCart={addToCart} />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
