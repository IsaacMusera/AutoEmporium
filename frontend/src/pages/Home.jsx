import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

import NavigationBar from '../components/Navbar';
import CatalogueCard from '../components/CatalogueCard';

function Home() {
  return (
    <div style={{
      backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTrrKpAxHX0_pqlHUxsMzYQZKB3iNncp6WF5GiMcQxKqL-Mx0QHs4O2Ygzh50zl3mnWc&usqp=CAU')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <NavigationBar />
      <Container>
        <Row className='mt-10' style={{ marginTop: 10 }}>
          {new Array(12).fill(Math.random()).map((_, index) => (
            <Col key={index} className='mb-5'>
              <CatalogueCard />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Home;