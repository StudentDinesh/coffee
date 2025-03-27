import React, { useState } from 'react';
import { FaSearch, FaCoffee, FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="header">
        <div className="logo">
          <FaCoffee className="logo-icon" />
          <span>Coffee Cafe</span>
        </div>

        <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${menuOpen ? "nav-active" : ""}`}>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/About">About</Nav.Link>
          <Nav.Link as={Link} to="/Product">Product</Nav.Link>
          <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/Farm">Farm</Nav.Link>
        </nav>

        <div className="header-actions">
          <FaSearch className="icon" />
          <Link to="/Login">
            <FaUser className="icon login-icon" />
          </Link>
          <Link to="/Cart">
            <FaShoppingCart className="icon cart-icon" />
            {cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
          </Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
