import Container from 'react-bootstrap/Container';
import Cataloguecard from './components/Catalogcard';
import { Col, Row } from 'react-bootstrap';


function App() {
  return (
    <Container className='mt-10'>
     <Row>
     {new Array(12).fill(Math.random()).map((_, index) => (
      <Col key={index} className='mb-5'>
      <Cataloguecard  />
      </Col>
     ))}
     </Row>
    </Container>
  )
}

export default App;
