import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Products from './component/Products';
import Singlepage from './component/Singlepage';
import Register from './component/Register';
import Login from './component/Login';
// import AddtoCart from './component/AddtoCart';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import productsdb from './data/Productlist';
import AddToCart from './component/AddtoCart';
import Adminlayout from './layouts/Adminlayout';
import AdminUsers from './component/AdminUsers';
import Admincontact from './component/Admincontact';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
};

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abt" element={<About />} />
          <Route path="/cont" element={<Contact />} />
          <Route path="/products" element={<Products productsdb={productsdb} addToCart={addToCart} />} />
          <Route path="/products/:id" element={<Singlepage addToCart={addToCart} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<AddToCart cart={cart} setCart={setCart} />} />

          <Route path='/admin' element={<Adminlayout/>}>
              <Route path='users' element={<AdminUsers/>}/>
              <Route path='contact' element={<Admincontact/>}/>
          </Route>






          </Routes>


          




        <Footer />



      </BrowserRouter>
    
    </div>
  );
}

export default App;
