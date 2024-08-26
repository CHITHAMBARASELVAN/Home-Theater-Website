import React from 'react';
import './Home.css';
import image1 from './assets/theater1.webp'
import image2 from './assets/theater2.webp'
import image3 from './assets/theater3.webp'

function Home() {
  return (
    <div id="home" className="home-container">
      <h1>Welcome to Your Ultimate Home Theater Experience</h1>
      <div className="photos">
        <img src={image1} alt="Theater Setup 1" />
        <img src={image2} alt="Theater Setup 2" />
        <img src={image3} alt="Theater Setup 3" />
      </div>
      <button className="order-button">Order Now</button>
    </div>
  );
}

export default Home;
