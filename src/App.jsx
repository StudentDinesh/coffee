import './App.css';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import About from './Component/About';
import Products from './Component/Products';
import Contact from './Component/Contact';
import Farm from './Component/Farm';
import Cart from './Component/Cart'; // Import Cart Component
import Login from './Component/Login'; // Import Login Component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Signup from './Component/Sign';

function App() {
  // Cart State Management
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove items from the cart
  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };


  return (
    <Router>
      {/* Pass cartItems to NavBar to show cart count */}
      <NavBar cartItems={cartItems} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        
        {/* Pass addToCart function to Products */}
        <Route path="/Product" element={<Products addToCart={addToCart} cartItems={cartItems} />} />
        
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Farm' element={<Farm />} />
        
        {/* Pass cartItems and removeFromCart to Cart */}
        <Route path='/Cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        
        {/* Add Login Route */}
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;