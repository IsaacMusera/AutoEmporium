from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, validator
import sqlite3
from typing import List

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the request model for Car
class Car(BaseModel):
    id: int = Field(default=None, primary_key=True)
    carname: str
    carprice: int
    cardescription: str
    carmodel: str
    carpricemodel: str
    caryearofmanufacture: int
    carenginesize: int
    cartransmission: str
    dealership_id: int

    # Add validators for constraints
    @validator('carprice', 'carenginesize', 'caryearofmanufacture')
    def check_positive(cls, value):
        if value <= 0:
            raise ValueError('Must be positive')
        return value

# Define the request model for Dealership
class Dealership(BaseModel):
    id: int = Field(default=None, primary_key=True)
    name: str
    address: str

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

# ORM methods for Dealership
def create_dealership(dealership: Dealership):
    conn = sqlite3.connect('cars.db')
    cursor = conn.cursor()
    cursor.execute('''
    INSERT INTO dealerships (name, address)
    VALUES (?, ?)
    ''', (dealership.name, dealership.address))
    conn.commit()
    dealership_id = cursor.lastrowid
    conn.close()
    return {**dealership.dict(), "id": dealership_id}

def delete_dealership(dealership_id: int):
    conn = sqlite3.connect('cars.db')
    cursor = conn.cursor()
    cursor.execute('DELETE FROM dealerships WHERE id = ?', (dealership_id,))
    conn.commit()
    conn.close()

def get_all_dealerships():
    conn = sqlite3.connect('cars.db')
    cursor = conn.cursor()
    cursor.execute('SELECT id, name, address FROM dealerships')
    rows = cursor.fetchall()
    conn.close()
    return [Dealership(id=row[0], name=row[1], address=row[2]) for row in rows]

def find_dealership_by_id(dealership_id: int):
    conn = sqlite3.connect('cars.db')
    cursor = conn.cursor()
    cursor.execute('SELECT id, name, address FROM dealerships WHERE id = ?', (dealership_id,))
    row = cursor.fetchone()
    conn.close()
    if row:
        return Dealership(id=row[0], name=row[1], address=row[2])
    return None

# ORM methods for Car
def create_car(car: Car):
    conn = sqlite3.connect('cars.db')
    cursor = conn.cursor()
    cursor.execute('''
    INSERT INTO cars (carname, carprice, cardescription, carmodel, carpricemodel, caryearofmanufacture, carenginesize, cartransmission, dealership_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (car.carname, car.carprice, car.cardescription, car.carmodel, car.carpricemodel, car.caryearofmanufacture, car.carenginesize, car.cartransmission, car.dealership_id))
    conn.commit()
    car_id = cursor.lastrowid
    conn.close()
    return {**car.dict(), "id": car_id}

def delete_car(car_id: int):
    conn = sqlite3.connect('cars.db')
    cursor = conn.cursor()
    cursor.execute('DELETE FROM cars WHERE id = ?', (car_id,))
    conn.commit()
    conn.close()

def get_all_cars():
    conn = sqlite3.connect('cars.db')
    cursor = conn.cursor()
    cursor.execute('SELECT id, carname, carprice, cardescription, carmodel, carpricemodel, caryearofmanufacture, carenginesize, cartransmission, dealership_id FROM cars')
    rows = cursor.fetchall()
    conn.close()
    return [Car(id=row[0], carname=row[1], carprice=row[2], cardescription=row[3], carmodel=row[4], carpricemodel=row[5], caryearofmanufacture=row[6], carenginesize=row[7], cartransmission=row[8], dealership_id=row[9]) for row in rows]

def find_car_by_id(car_id: int):
    conn = sqlite3.connect('cars.db')
    cursor = conn.cursor()
    cursor.execute('SELECT id, carname, carprice, cardescription, carmodel, carpricemodel, caryearofmanufacture, carenginesize, cartransmission, dealership_id FROM cars WHERE id = ?', (car_id,))
    row = cursor.fetchone()
    conn.close()
    if row:
        return Car(id=row[0], carname=row[1], carprice=row[2], cardescription=row[3], carmodel=row[4], carpricemodel=row[5], caryearofmanufacture=row[6], carenginesize=row[7], cartransmission=row[8], dealership_id=row[9])
    return None

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

# Initialize the database tables
create_tables()

# Run the application using:
# uvicorn main:app --reload
