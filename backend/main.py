from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
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

# Define the request model
class Car(BaseModel):
    id: int
    carname: str
    carprice: int
    cardescription: str
    carmodel: str
    caryearofmanufacture: int
    carenginesize: int
    cartransmission: str

# Database interaction function to insert a car
def insert_car(car: Car):
    conn = sqlite3.connect('cars.db')
    cursor = conn.cursor()
    
    try:
        cursor.execute('''
        INSERT INTO cars (id, carname, carprice, cardescription, carmodel, caryearofmanufacture, carenginesize, cartransmission)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', (car.id, car.carname, car.carprice, car.cardescription, car.carmodel, car.caryearofmanufacture, car.carenginesize, car.cartransmission))
        conn.commit()
    except sqlite3.IntegrityError as e:
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        conn.close()

# Database interaction function to get all cars
def get_all_cars():
    conn = sqlite3.connect('cars.db')
    cursor = conn.cursor()
    
    try:
        cursor.execute('SELECT id, carname, carprice, cardescription, carmodel, caryearofmanufacture, carenginesize, cartransmission FROM cars')
        rows = cursor.fetchall()
        cars = [Car(id=row[0], carname=row[1], carprice=row[2], cardescription=row[3], carmodel=row[4], caryearofmanufacture=row[5], carenginesize=row[6], cartransmission=row[7]) for row in rows]
    except sqlite3.DatabaseError as e: 
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        conn.close()
    
    return cars

# Define the route to insert a car
@app.post("/cars/", response_model=Car)
async def create_car(car: Car):
    insert_car(car)
    return car

# Define the route to get all cars
@app.get("/cars/", response_model=List[Car])
async def read_cars():
    cars = get_all_cars()
    return cars

# Run the application using:
# uvicorn main:app --reload

