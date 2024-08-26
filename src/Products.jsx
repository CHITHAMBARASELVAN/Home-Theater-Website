import React from 'react';
import './Products.css';
import product1 from './assets/product1.webp'
import product2 from './assets/product2.webp'
import product3 from './assets/product3.jpg'

function Products() {
  return (
    <div id="products" className="products-container">
      <h2>Our Products</h2>
      <div className="product-list">
        <div className="product-item">
          <img src={product1} alt="Product 1" />
          <h3>4K Ultra HD Projector</h3>
          <p>The latest in home theater projection technology, offering crystal-clear picture quality.</p>
          <button className="order-button">Order Now</button>
        </div>
        <div className="product-item">
          <img src={product2} alt="Product 2" />
          <h3>Surround Sound System</h3>
          <p>Experience immersive sound with our state-of-the-art surround sound system.</p>
          <button className="order-button">Order Now</button>
        </div>
        <div className="product-item">
          <img src={product3} alt="Product 3" />
          <h3>Luxury Recliners</h3>
          <p>Relax in style with our comfortable and luxurious home theater seating.</p>
          <button className="order-button">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
