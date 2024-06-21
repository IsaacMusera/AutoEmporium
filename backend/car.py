from pydantic import BaseModel, Field, validator
from typing import List
import sqlite3

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
