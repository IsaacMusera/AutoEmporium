import { Card, Button} from "react-bootstrap"


function CatalogueCard() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img
     variant="top" 
     src="https://images.carexpert.com.au/app/uploads/2021/09/2022-Mercedes-Benz-G400d-HERO.jpg " />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default CatalogueCard;