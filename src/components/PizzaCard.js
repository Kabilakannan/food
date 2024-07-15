import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function PizzaCard() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <Card style={{ width: "18rem" }} className="m-3" fluid={true}>
    <Card.Img variant="top" src={require('../assests/one.jpeg')} fluid={true}/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
      </Card.Text>
      <div className="text-center">
         <Button variant="primary">Go somewhere</Button>
      </div>
    </Card.Body>
  </Card>
   {/* <MyVerticallyCenteredModal
   show={modalShow}
   onHide={() => setModalShow(false)}
 /> */}
 </>
  )
}

export default PizzaCard