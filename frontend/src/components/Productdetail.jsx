// src/components/ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';

const cars = [
  { id: 1, name: 'Car Model 1', price: '$20,000', description: 'Description of Car Model 1' },
  { id: 2, name: 'Car Model 2', price: '$25,000', description: 'Description of Car Model 2' },
  { id: 3, name: 'Car Model 3', price: '$30,000', description: 'Description of Car Model 3' },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const car = cars.find(car => car.id === parseInt(id));

  if (!car) return <div>Car not found</div>;

  return (
    <div className="product-detail">
      <h2>{car.name}</h2>
      <p>Price: {car.price}</p>
      <p>{car.description}</p>
    </div>
  );
};

export default ProductDetailPage;
