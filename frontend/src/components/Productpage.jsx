// src/components/ProductPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';

const cars = [
  { id: 1, name: 'Car Model 1', price: '$20,000' },
  { id: 2, name: 'Car Model 2', price: '$25,000' },
  { id: 3, name: 'Car Model 3', price: '$30,000' },
];

const ProductPage = () => {
  return (
    <div className="product-page">
      <h2>Available Cars</h2>
      <ul className="product-list">
        {cars.map(car => (
          <li key={car.id} className="product-item">
            <Link to={`/products/${car.id}`}>
              {car.name} - {car.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
