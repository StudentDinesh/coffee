import React from 'react'


const Products = ({ addToCart, cartItems }) => {
  const items=[
    {
      "id": 1,
      "name": "Arabica Roasted Beans",
      "price": "13.25",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2020/11/rkjgkrg-160x225.png"
    },
    {
      "id": 2,
      "name": "Ethiopia Roasted Beans",
      "price": "17.93",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2020/11/ksjfjfs-160x225.png"
    },
    {
      "id": 3,
      "name": "kenya Light Roasted Beans",
      "price": "39.97",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2020/11/krgjr-160x225.png"
    },
    {
      "id": 4,
      "name": "Cube Roasted Beans",
      "price": "38.10",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/krgnvgr-160x225.png"
    },
    {
      "id": 5,
      "name": "Arabica Medium Roasted Beans",
      "price": "278.00",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2020/11/rkjgkrg-160x225.png"
    },
    {
      "id": 6,
      "name": "Red Capsule Coffee light",
      "price": "7.27",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/nbjk-160x225.png"
    },
    {
      "id": 7,
      "name": "Brown Coffee Cup",
      "price": "14.29",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/htlmb-1-160x225.png"
    },
    {
      "id": 8,
      "name": "Gray Coffee Cup",
      "price": "28.02",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/ogbjgo-2-160x225.png"
    },
    {
      "id": 9,
      "name": "Coffee Cup",
      "price": "17.27",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/kbtntkb-3-160x225.png"
    },
    {
      "id": 10,
      "name": "Red Capsule Coffee light",
      "price": "4.29",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/kbjk-160x225.png"
    },
    {
      "id": 11,
      "name": "Rollisa Coffee Mocha Light",
      "price": "8.02",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/khkm-160x225.png"
    },
    {
      "id": 12,
      "name": "Rollisa Coffee Latte strong",
      "price": "11.27",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/kjppo-160x225.png"
    },
    {
      "id": 13,
      "name": "Green Ethiopia Coffee",
      "price": "14.29",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2020/11/ksjfjfs-160x225.png"
    },
    {
      "id": 14,
      "name": "Rollisa Coffee set Large",
      "price": "38.02",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/khkm-160x225.png"
    },
    {
      "id": 15,
      "name": "Capsule Coffee Strong",
      "price": "7.27",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/kjppo-160x225.png"
    }, 
    {
      "id": 16,
      "name": "Coffee  Cup Small",
      "price": "17.27",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/kbtntkb-3-160x225.png"
    },
    {
      "id": 17,
      "name": "Black Capsule Coffee light",
      "price": "7.26",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/nbjk-160x225.png"
    },
    {
      "id": 18,
      "name": "Coffee Cup Brown",
      "price": "14.27",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/htlmb-1-160x225.png"
    },
    {
      "id": 19,
      "name": "Coffee Cup Gray",
      "price": "28.05",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/ogbjgo-2-160x225.png"
    },
    {
      "id": 20,
      "name": "Coffee min-Cup",
      "price": "17.25",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2021/11/kbtntkb-3-160x225.png"
    }
  ]

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
        {items.map((product) => (
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
