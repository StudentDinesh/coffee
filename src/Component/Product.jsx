import React from "react";


const Product = () => {
  const products =[
    {
        "id": 1,
        "title":"Brewed coffee",
        "description": "You can order our coffee in the online store or find our store in your city.",
        "image": "https://coffo.peerduck.com/wp-content/uploads/2022/04/rgvrgv@2x.png"   
      },
    {
        "id": 2,
        "title":"Coffee beans",
        "description": "You can order our coffee in the online store or find our store in your city.",
        "image": "https://coffo.peerduck.com/wp-content/uploads/2022/04/5k4gm@2x.png"   
      },
    {
      "id": 3,
      "title":"Ground coffee",
      "description": "You can order our coffee in the online store or find our store in your city.",
      "image": "https://coffo.peerduck.com/wp-content/uploads/2022/04/etgvet@2x.png"   
    }
  ]

  return (
    <section className="explore-section">
      <h2 className="section-title">Explore our <span>Coffee Shop</span></h2>
      <p className="section-description">
        There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.
      </p>
      <div className="explore-grid">
        {products.map((item) => (
          <div key={item.id} className="explore-card">
            <img src={item.image} alt={item.title} className="explore-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
