// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Welcome to Car Sales</h1>
      <p>Your one-stop shop for the best cars.</p>
      <button onClick={() => window.location.href='/products'}>Shop Now</button>
    </div>
  );
};

export default LandingPage;
