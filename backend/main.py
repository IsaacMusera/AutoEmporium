import sqlite3
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from car import Car, create_car, delete_car, get_all_cars, find_car_by_id
from dealership import Dealership, create_dealership, delete_dealership, get_all_dealerships, find_dealership_by_id

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the route to create a dealership
@app.post("/dealerships/", response_model=Dealership)
async def create_dealership_route(dealership: Dealership):
    return create_dealership(dealership)

# Define the route to delete a dealership
@app.delete("/dealerships/{dealership_id}")
async def delete_dealership_route(dealership_id: int):
    delete_dealership(dealership_id)
    return {"message": "Dealership deleted successfully"}

# Define the route to get all dealerships
@app.get("/dealerships/", response_model=List[Dealership])
async def get_all_dealerships_route():
    return get_all_dealerships()

# Define the route to find a dealership by id
@app.get("/dealerships/{dealership_id}", response_model=Dealership)
async def find_dealership_by_id_route(dealership_id: int):
    dealership = find_dealership_by_id(dealership_id)
    if not dealership:
        raise HTTPException(status_code=404, detail="Dealership not found")
    return dealership

# Define the route to create a car
@app.post("/cars/", response_model=Car)
async def create_car_route(car: Car):
    return create_car(car)

# Define the route to delete a car
@app.delete("/cars/{car_id}")
async def delete_car_route(car_id: int):
    delete_car(car_id)
    return {"message": "Car deleted successfully"}

# Define the route to get all cars
@app.get("/cars/", response_model=List[Car])
async def get_all_cars_route():
    return get_all_cars()

# Define the route to find a car by id
@app.get("/cars/{car_id}", response_model=Car)
async def find_car_by_id_route(car_id: int):
    car = find_car_by_id(car_id)
    if not car:
        raise HTTPException(status_code=404, detail="Car not found")
    return car

# Database interaction function to create tables
def create_tables():
    conn = sqlite3.connect('cars.db')
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS dealerships (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        address TEXT NOT NULL
    )
    ''')
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS cars (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        carname TEXT NOT NULL,
        carprice INTEGER NOT NULL,
        cardescription TEXT NOT NULL,
        carmodel TEXT NOT NULL,
        carpricemodel TEXT NOT NULL,
        caryearofmanufacture INTEGER NOT NULL,
        carenginesize INTEGER NOT NULL,
        cartransmission TEXT NOT NULL,
        dealership_id INTEGER NOT NULL,
        FOREIGN KEY(dealership_id) REFERENCES dealerships(id)
    )
    ''')
    conn.commit()
    conn.close()


create_tables()
