import React,{useState} from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import {Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
function PickOfTheWeek() {
  const [show, setShow] = useState(false);
  return (
    <section id="Must try"  className="my-3">
        <div className="text-center py-3 my-3">
           <h2 className="display-5 text-primary"><span><i class="bi bi-search-heart px-2"></i>
            </span>Pick of the Week   </h2>
        </div>
        <Container>
           <Row className="align-items-center justify-content-center">
            <Col md={7}>
              <Image  src={require('../assests/center1.jpeg')} fluid={true} rounded/>
            </Col>
            <Col md={5}>
            <div className="p-3">
              <h2 className="h1">Double Cheese Fajita</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
              </p>
              <Button  onClick={()=>setShow(true)}>
                <i className="bi bi-basket"></i> Buy Now
              </Button>
            </div>
          </Col>
           </Row>

           <ToastContainer
          className="position-fixed bottom-30 end-0 p-3"
          position="bottom-end"
        >
          <Toast  onClose={()=>setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>Item added to Cart</small>
            </Toast.Header>
            <Toast.Body>Go and Checkout The card</Toast.Body>
          </Toast>
        </ToastContainer>
        </Container>
    </section>
  )
}

export default PickOfTheWeek