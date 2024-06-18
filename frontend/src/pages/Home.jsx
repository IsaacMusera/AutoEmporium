import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import NavigationBar from "../components/Navbar";
import CatalogueCard from "../components/CatalogueCard";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/cars/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setCars(data);
        } else {
          console.error("Expected an array but got:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTrrKpAxHX0_pqlHUxsMzYQZKB3iNncp6WF5GiMcQxKqL-Mx0QHs4O2Ygzh50zl3mnWc&usqp=CAU')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavigationBar />
      <Container>
        <Row className="mt-10" style={{ marginTop: 10 }}>
          {cars.map((car) => (
            <Col key={car.id} className="mb-5">
              <CatalogueCard
                carName={car.carname}
                carPrice={car.carprice}
                carDescription={car.cardescription}
                carModel={car.carmodel}
                carYearOfManufacture={car.caryearofmanufacture}
                carEngineSize={car.carenginesize}
                carTransmission={car.cartransmission}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
