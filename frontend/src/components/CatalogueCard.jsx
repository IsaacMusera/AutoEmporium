import React from "react";
import { Card, Button } from "react-bootstrap";

function CatalogueCard({
  carName,
  carPrice,
  carDescription,
  carModel,
  carYearOfManufacture,
  carEngineSize,
  carTransmission,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images.carexpert.com.au/app/uploads/2021/09/2022-Mercedes-Benz-G400d-HERO.jpg"
      />
      <Card.Body>
        <Card.Title>{carName}</Card.Title>
        <Card.Text>
          <strong>Model:</strong> {carModel} <br />
          <strong>Year:</strong> {carYearOfManufacture} <br />
          <strong>Engine Size:</strong> {carEngineSize} cc <br />
          <strong>Transmission:</strong> {carTransmission} <br />
          <strong>Price:</strong> ${carPrice.toLocaleString()} <br />
          <strong>Description:</strong> {carDescription}
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
  );
}

export default CatalogueCard;
