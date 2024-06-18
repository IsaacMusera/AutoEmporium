import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarList() {
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/cars/')
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCars = cars.filter(car => {
        return (
            car.carname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.carprice.toString().includes(searchTerm)
        );
    });

    return (
        <div>
            <input
                type="search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for a car"
            />
            <ul>
                {filteredCars.map(car => (
                    <li key={car.id}>
                        {car.carname} - {car.carprice}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CarList;