import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import {Container,Row,Col} from "react-bootstrap";

function Banner() {
  return (
    <Container fluid fade>
      <Row className="justify-content-center  mt-2 align-items-center ">
        <Col lg={8}>
        <Carousel data-bs-theme="dark">
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={require('../assests/one.jpeg')}
          alt="First slide"
        />
        <Carousel.Caption className="text-muted">
          <h2>Cheese Pizza</h2>
          <p  className="d-none d-sm-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={require('../assests/two.jpeg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Chicken pizza</h2>
          <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={require('../assests/three.jpeg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>peperronion Pizza</h2>
          <p className="d-none d-sm-block">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
        </Col>
      </Row>
      <div className="text-center">
       <h2 class="display-5 mt-3">Pizza for Every occasion</h2>
       <p className="lead text-muted">Lorem ipsum dolor sir amet </p>
      </div>
    </Container>
  );
}

export default Banner;
