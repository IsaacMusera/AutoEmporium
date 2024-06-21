from pydantic import BaseModel, Field
from typing import List
import sqlite3

# Define the request model for Dealership
class Dealership(BaseModel):
    id: int = Field(default=None, primary_key=True)
    name: str
    address: str

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
