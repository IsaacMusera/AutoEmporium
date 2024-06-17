import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container
      fluid
      className="contact-page"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3435249/pexels-photo-3435249.jpeg?cs=srgb&dl=pexels-anniroenkae-3435249.jpg&fm=jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem'
      }}
    >
      <Row className="align-items-center justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} xl={3}>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '2rem',
              borderRadius: '10px'
            }}
          >
            <h1 className="text-center">How to Find Us</h1>
            <h2 className="text-center">AutoEmporium</h2>
            <h3 className="text-center">Kenya/Nairobi, Hometown, Westlands, 56375</h3>
            <p className="text-center">
              Phone: (254) 746633167
              <br />
              Email: <a href="mailto:isaacmusera05@gmail.com">isaacmusera05@gmail.com</a>
            </p>
            <h4 className="text-center">Parking:</h4>
            <p className="text-center">
              We offer free parking for all our customers. The entrance to our parking
              lot is off Main Street, just past the showroom entrance.
            </p>
            <h4 className="text-center">Hours of Operation:</h4>
            <p className="text-center">otstrap raw
              Monday - Friday: 9:00 AM - 7:00 PM
              <br />
              Saturday: 10:00 AM - 6:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
