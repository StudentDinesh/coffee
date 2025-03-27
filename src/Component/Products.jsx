import React, { useState, useEffect } from 'react';

const Products = ({ addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4002/items")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      alert(`${product.name} is already in your cart!`);
    } else {
      addToCart(product);
      alert(`${product.name} has been added to your cart!`);
    }
  };

  return (
    <>
      <section className="testimonials1">
        <h2>Our Products</h2>
      </section>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
